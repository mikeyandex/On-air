import { authAPI } from '../api/api'

const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_AUTH_DATA = 'SET_AUTH_DATA'
const SET_USER_ID = 'SET_USER_ID'

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

export const authMe = () => {
  return (dispatch) => {
    dispatch(setIsFetching(true))
    authAPI.authMe()
      .then(data => {
        if (data.data.resultCode === 0) {
          dispatch(setAuthData(data.data.data))
        }
        dispatch(setIsFetching(false))
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

export const loginMe = (email, password, rememberMe) => {
  //return (dispatch) => {
    authAPI.loginMe(email, password, rememberMe)
    .then (data => {
      //if (data.data.resultCode === 0) {
        //dispatch(authMe())
      //}
      console.log(data)
    })
  }
//}


export const setAuthData = (data) => ({ type: SET_AUTH_DATA, data })

export const setUserId = (userId) => ({ type: SET_USER_ID, userId })

export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export default authReducer