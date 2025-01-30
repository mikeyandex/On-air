import React, { useState, useRef } from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from '../../../Common/Preloader/Preloader'
import userAva from './../../../../image/userAva.jpg'
import plus from './../../../../image/plus.svg'
import Slogan from './Slogan/Slogan'

const ProfileInfo = (props) => {

  let [topImage, setTopImage] = useState('https://cdnb.artstation.com/p/assets/images/images/008/512/123/large/vitali-timkin-anythin-city-vitali-timkin1.jpg')

  let [plusAppear, togglePlus] = useState(false)

  let handleClick = () => {
    uploadRef.current.value = ''
    togglePlus(!plusAppear)
  }

  let changeImage = () => {

    setTopImage(uploadRef.current.value)
    uploadRef.current.style.className = 'plusDisplayNone'
  }

  const uploadRef = useRef();

  if (!props.profileData) {
    return <Preloader />
  }

  return (
    <div className={classes.profile}>
      <div className={classes.imageWrapper}>
        <input className={plusAppear === true
          ? classes.plus
          : classes.plusDisplayNone}
          ref={uploadRef}
          placeholder='https://image.jpg'
          onDoubleClick={changeImage}
          type="url" />
        <img className={classes.image}
          onClick={handleClick}
          src={topImage} />

        <img className={classes.avatar} src={props.profileData.photos.large != null
          ? props.profileData.photos.large
          : userAva} />
      </div>

      <div className={classes.profGrid}>
        <h3 className={classes.userName}>{props.profileData.fullName}</h3>
        <Slogan status={props.status} updateStatus={props.updateStatus} />
        <p className={classes.slogan}>{props.profileData.aboutMe}</p>
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