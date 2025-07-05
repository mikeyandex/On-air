import React from 'react'
import WallCell from './WallCell/WallCell'
import classes from './Profile.module.css'
import ProfileInfo from './ProInfo/ProfileInfo'
import PostForm from './PostForm/PostForm'

const Profile = (props) => {
    
  let wallArray = props.wPage.map(wall => <WallCell like={wall.like} message={wall.message} id={wall.id} key={wall.id} />)

  return (
    <div className={classes.profile}>
      <ProfileInfo
        profileData={props.profileData}
        status={props.status}
        updateStatus={props.updateStatus}
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
/*
        <textarea className={classes.input} onChange={onPostChange} value={props.textAreaValue} rows="2" cols="33" placeholder='Введите сообщение' />

        <button onClick={onAddPost} className={classes.button}></button>

                      <OnChange name="post">
                {(value, previous) => {
                  // do something
                  if (value){
                    onPostChange
                  }
                }}
              </OnChange>
*/

/*
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="post" component="input" />

              <button type="submit">Submit</button>
            </form>
          )} />
*/