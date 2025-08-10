import { authAPI } from '../api/api'
import { Form, Field } from 'react-final-form'

const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_AUTH_DELETE = 'SET_AUTH_DELETE'
const SET_USER_ID = 'SET_USER_ID'
const GET_CAPTCHA = 'GET_CAPTCHA'

const initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_AUTH_DATA':
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }

    case 'SET_AUTH_DELETE':
      return {
        ...state,
        ...action.data,
        isAuth: false,
      }

    case 'SET_USER_ID':
      return {
        ...state,
        id: action.data.userId,
        isAuth: true,
      }

    case 'SET_IS_FETCHING':
      return { ...state, isFetching: action.isFetching }

    default:
      return state
  }
}

export const setAuthData = (data) => ({ type: SET_AUTH_DATA, data})

export const authMe = () => {
  return (dispatch) => {
    dispatch(setIsFetching(true))
    authAPI.authMe()
      .then(payload => {
        if (payload.data.resultCode === 0) {
          debugger
          let {id, email, login} = payload.data.data
          dispatch(setAuthData({id, email, login}))
        }
        dispatch(setIsFetching(false))
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

export const loginMe = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    authAPI.loginMe(email, password, rememberMe, captcha)
      .then(payload => {
          if (payload.data.resultCode === 0 ) {
          dispatch(authAPI.authMe())}
          else if (payload.resultCode !== 0) {alert(payload.data.messages)} 
      })      
      .catch(function (error) {
         console.log(error)
      })
      
  }
}

export const logoutMe = () => {
  return (dispatch) => {
    authAPI.logoutMe()
      .then(payload => {
          debugger
        if (payload.resultCode === 0) {
          dispatch(setAuthData('', '', ''))
        }
        else if (payload.resultCode !== 0) {alert(payload.data.messages)}

      })
      .catch(function (error) {
        console.log(error)
      })

  }
}

export const setUserId = (userId) => ({ type: SET_USER_ID, userId })

export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export default authReducer