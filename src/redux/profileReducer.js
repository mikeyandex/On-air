const CREATE_POST = 'CREATE_POST'
const ADD_POST_TEXT = 'ADD_POST_TEXT'

const initialState = {
  wallData: [],
  textAreaValue: '',
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

    default:
      return state
  }
}


export const addPostActionCreator = () => ({ type: CREATE_POST, })

export const postChangeActionCreator = (text) => ({
  type: ADD_POST_TEXT,
  text: text,
})

export default profileReducer