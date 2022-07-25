import { storageService } from './storage.service.js'
import { httpService } from './http.service'
import { utilService } from './util.service'
import gWaps from '@/assets/JSON/wap.json' assert { type: 'json' }

const KEY = 'wap_db'

export const wapService = {
  query,
  getById,
  remove,
  save,
  getEmptyWap,
  saveToSession,
  getFromSession,
  getCurrState,
  updateCmp,
  removeCmp,
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

async function updateCmp(wapId, cmp) {
  const body = { wapId, cmp }
  return storageService.updateCmp(body)

  // return httpService.put('wap/cmp/', wap)
}

async function removeCmp(wapId, cmpId) {
  return storageService.removeCmp(wapId, cmpId)
  // return httpService.put(`wap/cmp/${wapId}`, cmpId)
}

function saveToSession(wap) {
  sessionStorage.setItem('currWap', JSON.stringify(wap))
}

function getFromSession() {
  const wap = JSON.parse(sessionStorage.getItem('currWap'))
  return wap
}

function getCurrState(cmpToSave, wap, action) {
  console.log(wap)
  let idx = wap.cmps.findIndex(cmp => cmp.id === cmpToSave.id)

  if (idx === -1) {
    // wap-nav is inside header if not stand alone
    if (cmpToSave.type === 'wap-nav') {
      idx = wap.cmps.findIndex(cmp => cmp.type === 'wap-header')

      return { idx, cmp: wap.cmps[idx], action }
    } else {
      // find the the container
      idx = wap.cmps
        .filter(cmp => cmp.type === 'wap-container')
        .find(cmp => cmp.info.cmps.some(cmp => cmp.id === cmpToSave.id))

      return { idx, cmp: wap.cmps[idx], action }
    }
  }

  return { idx, cmp: wap.cmps[idx], action }
}

function getEmptyWap(createdBy, name) {
  return {
    name: '',
    imgUrl: '',
    type: '',
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
