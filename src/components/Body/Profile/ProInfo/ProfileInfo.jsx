import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div className={classes.profile}>
      <div className={classes.imageWrapper}>
        <div className={classes.image} />
        <img className={classes.avatar} />
      </div>
      <div className={classes.profGrid}>
        <h3 className={classes.userName}>Михаил Новиков</h3>
        <p className={classes.slogan}>Даже самый худший день - это красивый день. Каждый день красив.</p>
      </div>
      <div className={classes.line}></div>
    </div>
  )
}

export default ProfileInfo