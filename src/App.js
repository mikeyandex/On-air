import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import Nav from './components/Nav/Nav'
import ProfileContainer from './components/Body/Profile/ProfileContainer'
import News from './components/Body/News/News'
import MusicContainer from './components/Body/Music/MusicContainer'
import Settings from './components/Body/Settings/Settings'
import FriendsContainer from './components/Body/Friends/FriendsContainer'
import './App.css'
import PostsContainer from './components/Body/Posts/PostsContainer'
import LoginContainer from './components/Body/Login/LoginForm/LoginContainer'

import { useNavigate } from "react-router-dom";
/*let navigate = useNavigate();

useEffect(() => {
   if (LoggedIn){
      return navigate("/");
   }
},[LoggedIn]);*/
         
const App = () => {

  return (

    <div className='app-wrapper'>
      <HeaderContainer />
      <Nav />

      <div>
        <Routes>
          <Route path='/Profile/:profileID?' element={<ProfileContainer />} />
          <Route path='/Posts' element={<PostsContainer />} />
          <Route path='/Friends' element={<FriendsContainer />} />
          <Route path='/News' element={<News />} />
          <Route path='/Music' element={<MusicContainer />} />
          <Route path='/Settings' element={<Settings />} />
          <Route path='/Login' element={<LoginContainer />} />
        </Routes>
      </div>
    </div>

  )
}

export default App