import profileReducer from './profileReducer'
import messageReducer from './messageReducer'
import friendsReducer from './friendsReducer'

let store = {
  _state: {
    dialogPage: {
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
    },
    wallPage: {
      wallData: [],
      textAreaValue: '',
    },
    friendsPage: {
      friendsData: [
        { user: 'Анатоле', id: '1' },
        { user: 'Боярский', id: '2' },
        { user: 'Дикаприо', id: '3' },
        { user: 'Анонимус', id: '4' },
        { user: 'Анонимус', id: '5' },
        { user: 'Анонимус', id: '6' },
        { user: 'Анонимус', id: '7' },
      ],
    },
  },
  _callSubscriber() {
    console.log('')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
 dispatch(action) {
  this._state.wallPage = profileReducer(this._state.wallPage, action)

  this._state.dialogPage = messageReducer(this._state.dialogPage, action)

  this._state.friendsPage = friendsReducer(this._state.friendsPage, action)

  this._callSubscriber(this._state)
 },
}

export default store