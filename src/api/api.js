import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "03b66fa9-5602-4182-a550-e688aeb6adfa" },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const userAPI = {
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

  getProfile(profileID) {
    console.warn('Obsolete method. Please use profileAPI')
    return profileAPI.getProfile(profileID)
  },
}

export const profileAPI = {
  getProfile(profileID) {
    return instance.get(`profile/${profileID}`)
  },
  getStatus(profileID) {
    return instance.get(`profile/status/${profileID}`)
  },
  updateStatus(status) {
    return instance.put('profile/status/', { status: status })
  },
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`)
  },
  loginMe(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha })
  },
  logoutMe() {
    return instance.delete(`auth/login`)
  },
  getCaptcha() {
    return instance.get(`security/get-captcha-url`)
  },
}