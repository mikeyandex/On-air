import React from 'react'
import WallCell from './WallCell/WallCell'
import classes from './Profile.module.css'
import ProfileInfo from './ProInfo/ProfileInfo'
import PostForm from './PostForm/PostForm'

const Profile = (props) => {
    debugger
  let wallArray = props.wPage.map(wall => <WallCell like={wall.like} message={wall.message} id={wall.id} key={wall.id} />)
  return (
    <div className={classes.profile}>
      <ProfileInfo
        profileData={props.profileData}
        status={props.status}
        updateStatus={props.updateStatus}
        topImage={props.topImage}
        setTopImage={props.setTopImage}
      />
      <div className={classes.wrapperText}>
        <PostForm 
          createPost={props.createPost}
          addPostText={props.addPostText}
          textAreaValue={props.textAreaValue}
        />
      </div>
      {wallArray}
    </div>
  )
}

export default Profile