import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './Posts.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Posts = (props) => {

  let dialogsArray = props.dPage.map(dialog => <Dialog user={dialog.user} key={dialog.id} id={dialog.id} />)

  let messagesArray = props.mData.map(message => <Message text={message.text} key={message.id} id={message.id} />)

  const onMessageChange = (event) => {
    let text = event.target.value
    props.onMessageChange(text)
  }

  const onAddMessage = () => {
    props.onAddMessage()
  }

  return (
    <div className={classes.head}>
      <div className={classes.posts}>
        <div className={classes.dialogs}>
          {dialogsArray}
        </div>
        <div className={classes.messages}>
          {messagesArray}
        </div>
        <div className={classes.wrapperText}>
          <textarea
            className={classes.input}
            onChange={onMessageChange}
            value={props.textAreaValue}
            placeholder='Введите сообщение' />
          <button onClick={onAddMessage}
            className={classes.button} />
        </div>
      </div>
    </div>
  )
}

export default Posts