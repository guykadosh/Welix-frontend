import { storageService } from './storage.service.js'
import { httpService } from './http.service'
import { Container } from 'vue3-smooth-dnd'

const KEY = 'wap_db'

export const wapService = {
  query,
  getById,
}

function _getUrl(id = '') {
  const BASE_URL =
    process.env.NODE_ENV !== 'development'
      ? '/api/toy'
      : '//localhost:3030/api/toy'

  return `${BASE_URL}/${id}`
}

async function query() {
  return storageService.query(KEY)
  // return await httpService.get('toy', query)
  // const res = await axios.get(_getUrl(), { params: query })
  // return res.data
}

async function getById(wapId) {
  // const toy = httpService.get(`toy/${toyId}`)
  // return toy
  try {
    const wap = await storageService.get(KEY, wapId)
    return wap
  } catch (err) {
    console.log(err)
    throw new Error('Cannot load toy')
  }
}

async function remove(toyId) {
  httpService.delete(`toy/${toyId}`)
  // const res = axios.delete(_getUrl(toyId))
  // return res
}

async function save(toy) {
  if (toy._id) {
    return httpService.put(`toy/${toy._id}`, toy)
    // return axios.put(_getUrl(toy._id), toy).then(res => res.data)
  }
  return httpService.post('toy', toy)
  // return axios.post(_getUrl(), toy).then(res => res.data)
}

