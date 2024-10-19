import React from 'react'
import WallCell from './WallCell/WallCell'
import classes from './Profile.module.css'
import ProfileInfo from './ProInfo/ProfileInfo'

const Profile = (props) => {

  const onPostChange = (event) => {
    let text = event.target.value
    props.postChange(text)
  }

  const onAddPost = () => {
    props.addPost()
  }

  let wallArray = props.wPage.map(wall => <WallCell like={wall.like} message={wall.message} id={wall.id} key={wall.id} />)

  return (
    <div className={classes.profile}>
      <ProfileInfo profileData={props.profileData} status={props.status} updateStatus={props.updateStatus}/>
      <div className={classes.wrapperText}>

        <textarea className={classes.input} onChange={onPostChange} value={props.textAreaValue} rows="2" cols="33" placeholder='Введите сообщение' />

        <button onClick={onAddPost} className={classes.button}></button>
      </div>
      {wallArray}
    </div>
  )
}

export default Profile