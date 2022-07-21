import { storageService } from './storage.service.js'

/* import { httpService } from './http.service' */
/* import { socketService, SOCKET_EVENT_USER_UPDATED } from './socket.service' */
/* import { showSuccessMsg } from '../services/event-bus.service' */

const USER_KEY = 'userDB'

export const userService = {
  login,
  logout,
  signup,
  getLoggedInUser,
  getUsers,
  getById,
  remove,
  update,
}

async function getUsers() {
  try {
    const users = await storageService.query(USER_KEY)
    return users
  } catch (err) {
    console.log('Cannot get users', err);
  }
  //return httpService.get(`user`)
}
async function getById(userId) {
  try {
    const user = await storageService.get(USER_KEY, userId)
    return user
  } catch (err) {
    console.log('Cannot find user', err);
  }

  //const user = await httpService.get(`user/${userId}`)
  //socketService.emit(USER_KEY, userId)
  //socketService.off(USER_KEY, onUserUpdate)
  //socketService.on(USER_KEY, onUserUpdate)
}
async function remove(userId) {
  try {
    const user = await storageService.remove(USER_KEY, userId)
    return user
  } catch (err) {
    console.log('Cannot remove user', err);
  }
  //return httpService.delete(`user/${userId}`)
}

async function update(user) {
  try {
    await storageService.put(USER_KEY, user)
    if (getLoggedInUser()._id === user._id) _saveLocalUser(user)
    return user
  } catch (err) {
    console.log('Cannot update user', err);
  }
  //user = await httpService.put(`user/${user._id}`, user)
}

async function login(userCred) {
  try {
    const users = await storageService.query(USER_KEY)
    const user = users.find(user => user.username === userCred.username)
    if (user) return user
  } catch (err) {
    console.log('Cannot login', err);
  }

  //const user = await httpService.post('auth/login', userCred)
  // socketService.emit('set-user-socket', user._id)
  //if (user) {
  //socketService.login(user._id)
  //}
}
async function logout() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (err) {
    console.log('Cannot logout', err);
  }
  //socketService.logout()
  //return await httpService.post('auth/logout')
}
async function signup(userCred) {
  try {
    const user = await storageService.post(USER_KEY, userCred)
    return user
  } catch (err) {
    console.log('Cannot signup', err)
  }
  //const user = await httpService.post('auth/signup', userCred)
  //socketService.login(user._id)
}

function getLoggedInUser() {
  return JSON.parse(localStorage.getItem(USER_KEY) || 'null')
}
/* function onUserUpdate(user) {
  showSuccessMsg(
    `This user ${user.fullname} just got updated from socket, new score: ${user.score}`
  )
  store.commit({ type: 'setWatchedUser', user })
}
 */