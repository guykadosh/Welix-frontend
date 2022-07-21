import { storageService } from './storage.service.js'
import { httpService } from './http.service'
import { utilService } from './util.service'
import gCmp from '@/assets/JSON/cmp.json' assert { type: 'json' }

const KEY = 'cmp_db'

export const cmpService = {
  query,
  getById,
  remove,
  save,
  getEmptycmp,
}

_createCmp()

async function query() {
  return storageService.query(KEY)
  // return await httpService.get('cmp', query)
}

async function getById(cmpId) {
  try {
    const cmp = await storageService.get(KEY, cmpId)
    return cmp
  } catch (err) {
    console.log(err)
    throw new Error('Cannot load cmp')
  }
  // const cmp = httpService.get(`cmp/${cmpId}`)
}

async function remove(cmpId) {
  return storageService.remove(KEY, cmpId)
  // httpService.delete(`cmp/${cmpId}`)
}

async function save(cmp) {
  if (cmp._id) return await storageService.put(KEY, cmp)
  return await storageService.post(KEY, cmp)

  // if (cmp._id) {
  //   return httpService.put(`cmp/${cmp._id}`, cmp)
  // }
  // return httpService.post('cmp', cmp)
}

function getEmptycmp(createdBy, name) {
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

function _createCmp() {
  let cmps = utilService.loadFromStorage(KEY)
  if (!cmps || !cmps.length) {
    cmps = gCmp
    utilService.saveToStorage(KEY, cmps)
  }
  return cmps
}
