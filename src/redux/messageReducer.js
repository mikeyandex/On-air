const CREATE_MESSAGE = 'CREATE_MESSAGE'
const ADD_MESSAGE_TEXT = 'ADD_MESSAGE_TEXT'

const initialState = {
  dialogData: [
    { user: 'Анатоле', id: '1' },
    { user: 'Боярский', id: '2' },
    { user: 'Дикаприо', id: '3' },
  ],
  messageData: [
    { text: 'хожу в дурацкой жилетке с кучей карманов', id: '1' },
    { text: 'Каналья!', id: '2' },
    { text: 'Я полез в лошадь', id: '3' },
  ],
  textAreaValue: '',
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_MESSAGE':
      let newMessage = {
        text: state.textAreaValue,
        id: '4',
      }
      return {
        ...state,
        messageData: [...state.messageData, newMessage],
        textAreaValue: '',
      }
    case 'ADD_MESSAGE_TEXT':
      return {
        ...state,
        textAreaValue: action.text,
      }
    default:
      return state
  }
}

export const addMessageActionCreator = () => ({ type: CREATE_MESSAGE })

export const messageChangeActionCreator = (text) => ({
  type: ADD_MESSAGE_TEXT,
  text: text,
})

export default messageReducer