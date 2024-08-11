import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "00e2a35f-b633-4e78-b47c-f4d71a81e922" },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

const userAPI = {
  getUser(pageSize = 5, currentPage = 1) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(
      response => {
        return response.data
      }
    )
  },

  followUser(userID) {
    return instance.post(`follow/${userID}`).then(
      response => {
        return response.data
      }
    )
  },

  unfollowUser(userID) {
    return instance.delete(`follow/${userID}`).then(
      response => {
        return response.data
      }
    )
  },

  authMe() {
    return instance.get(`auth/me`).then(
      response => {
        return response.data
      }
    )
  },

  getProfile(profileID) {return instance.get(`profile/${profileID}`)
  },

}

const authAPI = {
  authMeAPI() {
    return instance.get(`auth/me`)}
}


export default userAPI