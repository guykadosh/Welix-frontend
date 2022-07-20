import { storageService } from './storage.service.js'
import { httpService } from './http.service'
<<<<<<< HEAD
=======
import { utilService } from './util.service'
import gWaps from '@/assets/JSON/wap.json' assert { type: 'json' }
>>>>>>> 9b12d8a51e70c2dbc7c82f3d886d3ed007c89989

const KEY = 'wap_db'

export const wapService = {
  query,
  getById,
  remove,
  save,
  getEmptyWap,
}

_createWaps()

async function query() {
  return storageService.query(KEY)
  // return await httpService.get('wap', query)
}

async function getById(wapId) {
  try {
    const wap = await storageService.get(KEY, wapId)
    return wap
  } catch (err) {
    console.log(err)
    throw new Error('Cannot load wap')
  }
  // const wap = httpService.get(`wap/${wapId}`)
}

async function remove(wapId) {
  return storageService.remove(KEY, wapId)
  // httpService.delete(`wap/${wapId}`)
}

async function save(wap) {
  if (wap._id) return await storageService.put(KEY, wap)
  return await storageService.post(KEY, wap)

  // if (wap._id) {
  //   return httpService.put(`wap/${wap._id}`, wap)
  // }
  // return httpService.post('wap', wap)
}

function getEmptyWap(createdBy, name) {
  return {
    name: '',
    imgUrl: '',
    createdBy,
    usersData: {
      contacts: [
        { email: 'user@user.com', msg: 'Please send me stuff', at: 123 },
      ],
      signups: [],
    },
    theme: '',
    cmps: [],
    isPublic: false,
  }
}

function _createWaps() {
  let waps = utilService.loadFromStorage(KEY)
  if (!waps || !waps.length) {
    waps = gWaps
    utilService.saveToStorage(KEY, waps)
  }
  return waps
}
