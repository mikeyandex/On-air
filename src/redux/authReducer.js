import { authAPI } from '../api/api'

const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_AUTH_DATA = 'SET_AUTH_DATA'

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

    case 'SET_IS_FETCHING':
      return { ...state, isFetching: action.isFetching }

    default:
      return state
  }
}

export const authMe = () => {
  return (dispatch) => {
    dispatch(setIsFetching(true))
    authAPI.authMe().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthData(data.data))
      }
      dispatch(setIsFetching(false))
    })
  }
}


export const setAuthData = (data) => ({ type: SET_AUTH_DATA, data })

export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export default authReducer