import { profileAPI, userAPI } from '../api/api'

const CREATE_POST = 'CREATE_POST'
const ADD_POST_TEXT = 'ADD_POST_TEXT'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_UPDATE_STATUS = 'SET_UPDATE_STATUS'


const initialState = {
  wallData: [],
  textAreaValue: '',
  status: 'status',
  profile: [],
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_POST':
      let newPost = {
        message: state.textAreaValue,
        like: '11',
        id: '4',
      }
      return {
        ...state,
        wallData: [...state.wallData, newPost],
        textAreaValue: '',
      }

    case 'ADD_POST_TEXT':
      return {
        ...state,
        textAreaValue: action.text,
      }

    case 'SET_PROFILE':
      return { ...state, profile: action.profile }

    case 'SET_STATUS':
      return { ...state, status: action.text.data }

    case 'SET_UPDATE_STATUS':
      return { ...state, status: action.text }

    default:
      return state
  }
}

export const getProfile = (profileID) => {
  return (dispatch) => {
    profileAPI.getProfile(profileID).then(response => {
      dispatch(setProfile(response))
    })
  }
}

export const getStatus = (profileID) => {
  return (dispatch) => {
    profileAPI.getStatus(profileID).then(response => {
      dispatch(setStatus(response))
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) { dispatch(setUpdateStatus(status)) }
    })
  }
}

export const addPost = () => ({ type: CREATE_POST, })

export const postChange = (text) => ({
  type: ADD_POST_TEXT,
  text: text,
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  text: status,
})

export const setUpdateStatus = (status) => ({
  type: SET_UPDATE_STATUS,
  text: status,
})

export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

export default profileReducer