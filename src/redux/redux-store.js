import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profileReducer'
import messageReducer from './messageReducer'
import friendsReducer from './friendsReducer'
import musicReducer from './musicReducer'
import authReducer from './authReducer'
import { reducer as formReducer } from 'redux-form'

let store = configureStore({
  reducer:
  {
    wallPage: profileReducer,
    dialogPage: messageReducer,
    friendsPage: friendsReducer,
    musicPage: musicReducer,
    auth: authReducer,
    form: formReducer,
  },
})
window.store = store
export default store