export const storageService = {
  query,
  get,
  post,
  put,
  remove,
  postMany,
  getUser,
  updateCmp,
  removeCmp,
}

function query(entityType) {
  var entities = JSON.parse(localStorage.getItem(entityType)) || []
  return Promise.resolve(entities)
}

function get(entityType, entityId) {
  return query(entityType).then(entities =>
    entities.find(entity => entity._id === entityId)
  )
}

function getUser(entityType, entityUsername) {
  return query(entityType).then(entities =>
    entities.find(entity => entity.username === entityUsername)
  )
}

function post(entityType, newEntity) {
  newEntity._id = _makeId()
  return query(entityType).then(entities => {
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
  })
}

function postMany(entityType, newEntities) {
  return query(entityType).then(entities => {
    entities.push(...newEntities)
    _save(entityType, entities)
    return entities
  })
}

function put(entityType, updatedEntity) {
  return query(entityType).then(entities => {
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    entities.splice(idx, 1, updatedEntity)
    _save(entityType, entities)
    return updatedEntity
  })
}

function remove(entityType, entityId) {
  return query(entityType).then(entities => {
    const idx = entities.findIndex(entity => entity._id === entityId)
    entities.splice(idx, 1)
    _save(entityType, entities)
  })
}

function _save(entityType, entities) {
  localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

async function removeCmp(wapId, cmpId) {
  const wap = await get('wap_db', wapId)
  let idx = wap.cmps.findIndex(cmp => cmp.id === cmpId)

  wap.cmps.splice(idx, 1)

  return put('wap_db', wap)
}

async function updateCmp({ wapId, cmp }) {
  try {
    const wap = await get('wap_db', wapId)

    let idx = wap.cmps.findIndex(currCmp => currCmp.id === cmp.id)
    console.log(idx)
    // -1 means the cmp lives inside a wap container
    if (idx === -1) {
      console.log('Hi?')
      // wap-nav is inside header if not stand alone
      if (cmp.type === 'wap-nav') {
        const wapHeader = wap.cmps.find(
          currCmp => currCmp.type === 'wap-header'
        )
        wapHeader.info.nav = cmp
        idx = wap.cmps.findIndex(cmp => cmp.id === wapHeader.id)
        cmp = wapHeader
      } else {
        // find the the container
        const wapContainer = wap.cmps
          .filter(currCmp => currCmp.type === 'wap-container')
          .find(currCmp =>
            currCmp.info.cmps.some(currCmp => currCmp.id === cmp.id)
          )
        // find the cmp idx
        const innerIdx = wapContainer.info.cmps.findIndex(
          cmp => cmp.id === cmp.id
        )
        wapContainer.info.cmps.splice(innerIdx, 1, cmp)
        idx = wap.cmps.findIndex(cmp => cmp.id === wapContainer.id)
        cmp = wapContainer
        console.log(cmp)
      }
    }

    wap.cmps.splice(idx, 1, cmp)

    put('wap_db', wap)

    return cmp
  } catch (err) {
    console.log(err)
    throw err
  }
}
