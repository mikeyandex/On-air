import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../../Common/Preloader/Preloader'
import userAva from './../../../../image/userAva.jpg'

const ProfileInfo = (props) => {

  if (!props.profileData) {
    return <Preloader />
  }

  return (
    <div className={classes.profile}>
      <div className={classes.imageWrapper}>
        <img className={classes.image} src={props.topImage} />
        <img className={classes.avatar} src={props.profileData.photos.large != null
          ? props.profileData.photos.large
          : userAva} />
      </div>
      <div className={classes.profGrid}>
        <h3 className={classes.userName}>{props.profileData.fullName}</h3>
        <p className={classes.slogan}>{props.profileData.aboutMe != null
          ? props.profileData.aboutMe
          : ' '
        }</p>
        <p className={classes.slogan}>{props.profileData.lookingForAJob
          ? 'в поиске работы'
          : 'не ищу работу'
        }</p>
        <p className={classes.slogan}>{props.profileData.lookingForAJobDescription}</p>
        <p className={classes.profileText}>{
          Object.entries(props.profileData.contacts).map((record) => {
            return (
              <div>
                <p className={classes.source}>{record[0]}</p> 
                <a className={classes.link} href={record[1]}>{record[1]}</a>
              </div>
            )
          })
        }</p>
      </div>
      <div className={classes.line}></div>
    </div>
  )
}

export default ProfileInfo