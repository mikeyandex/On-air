import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import ProfileContainer from './components/Body/Profile/ProfileContainer'
import News from './components/Body/News/News'
import MusicContainer from './components/Body/Music/MusicContainer'
import Settings from './components/Body/Settings/Settings'
import FriendsContainer from './components/Body/Friends/FriendsContainer'
import './App.css'
import PostsContainer from './components/Body/Posts/PostsContainer'

const App = () => {

  return (

    <div className='app-wrapper'>
      <Header />
      <Nav />

      <div>
        <Routes>
          <Route path='/Profile/:profileID?' element={<ProfileContainer />} />
          <Route path='/Posts' element={<PostsContainer />} />
          <Route path='/Friends' element={<FriendsContainer />} />
          <Route path='/News' element={<News />} />
          <Route path='/Music' element={<MusicContainer />} />
          <Route path='/Settings' element={<Settings />} />
        </Routes>
      </div>
    </div>

  )
}

export default App
