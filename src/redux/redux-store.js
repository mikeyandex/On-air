import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profileReducer'
import messageReducer from './messageReducer'
import friendsReducer from './friendsReducer'
import musicReducer from './musicReducer'

let store = configureStore({
  reducer:
  {
    wallPage: profileReducer,
    dialogPage: messageReducer,
    friendsPage: friendsReducer,
    musicPage: musicReducer,
  },
})
export default store