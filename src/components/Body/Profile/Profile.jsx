import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import WallCell from './WallCell/WallCell'
import classes from './Profile.module.css'
import ProfileInfo from './ProInfo/ProfileInfo'

const Profile = (props) => {

  let navigate = useNavigate()
  
  useEffect(() => {
    if (props.isAuth === false) {
      return navigate("/Login")
    }
  }, [props.isAuth])

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
      <ProfileInfo profileData={props.profileData} topImage={props.topImage} setTopImage={props.setTopImage} />
      <div className={classes.wrapperText}>

        <textarea className={classes.input} onChange={onPostChange} value={props.textAreaValue} rows="2" cols="33" placeholder='Введите сообщение' />

        <button onClick={onAddPost} className={classes.button}></button>
      </div>
      {wallArray}
    </div>
  )
}

export default Profile