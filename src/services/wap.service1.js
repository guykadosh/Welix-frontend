import { storageService } from "./storage.service"
import { utilService } from "./util.service.js"
import wap from '../assets/JSON/wap.js'

export const wapService = {
    getWaps,
    getWapById,
}



function _saveWaps() {
    utilService.saveToStorage(KEY, wap)
}

function getWaps() {
    return wap
}

function getWapById(wapId) {
    return wap.find(w => w._id === wapId)
}

