import { storageService } from "./storage.service"
import { utilService } from "./util.service.js"
import wap from '../assets/JSON/wap.js'

export const wapService = {
    getWaps,
    getWapById,
}

const KEY = 'wap_db'

function _saveWaps() {
    utilService.saveToStorage(KEY, wap)
}

function getWaps() {
    return wap
}

function getWapById(wapId) {
    return wap.find(w => w._id === wapId)
    // return storageService.get('wap', wapId)
}

