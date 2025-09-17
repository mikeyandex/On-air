import { profileAPI, userAPI } from '../api/api'

const CREATE_POST = 'CREATE_POST'
const ADD_POST_TEXT = 'ADD_POST_TEXT'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_UPDATE_STATUS = 'SET_UPDATE_STATUS'
const SET_TOP_IMAGE = 'SET_TOP_IMAGE'


const initialState = {
  wallData: [],
  textAreaValue: '',
  status: 'status',
  profile: [],
  topImage: 'https://i.pinimg.com/736x/c3/d7/db/c3d7db7de6fbae9ade5c221e0514b8b6.jpg',
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
        textAreaValue: '',
        wallData: [...state.wallData, newPost],        
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

    case 'SET_TOP_IMAGE':
      return { ...state, topImage: action.text }

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

export const createPost = () => ({ type: CREATE_POST, })

export const setTopImage = (text) => ({
  type: SET_TOP_IMAGE,
  text: text,
})


export const addPostText = (text) => ({
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