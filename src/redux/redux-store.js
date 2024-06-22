import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profileReducer'
import messageReducer from './messageReducer'
import friendsReducer from './friendsReducer'
import musicReducer from './musicReducer'
import authReducer from './authReducer'

let store = configureStore({
  reducer:
  {
    wallPage: profileReducer,
    dialogPage: messageReducer,
    friendsPage: friendsReducer,
    musicPage: musicReducer,
    auth: authReducer,
  },
})
export default store