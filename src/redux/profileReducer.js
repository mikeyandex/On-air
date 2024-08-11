import userAPI from '../api/api'

const CREATE_POST = 'CREATE_POST'
const ADD_POST_TEXT = 'ADD_POST_TEXT'
const SET_PROFILE = 'SET_PROFILE'

const initialState = {
  wallData: [],
  textAreaValue: '',
  profile: [],
  topImage: 'https://cdnb.artstation.com/p/assets/images/images/008/512/123/large/vitali-timkin-anythin-city-vitali-timkin1.jpg'
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

    default:
      return state
  }
}

export const getProfile = (ID) => {
  return (dispatch) => {
    let profileID = ID
    if (!profileID) {
      profileID = 2
    }
    userAPI.getProfile(profileID).then(response => {
      dispatch(setProfile(response))
    })
  }
}


export const addPost = () => ({ type: CREATE_POST, })

export const postChange = (text) => ({
  type: ADD_POST_TEXT,
  text: text,
})

export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

export default profileReducer