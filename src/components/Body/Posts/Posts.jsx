import React from 'react'
import classes from './Posts.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import MessageForm from './MessageForm/MessageForm'

const Posts = (props) => {
  debugger
  let dialogsArray = props.dPage.map(dialog => <Dialog user={dialog.user} key={dialog.id} id={dialog.id} />)

  let messagesArray = props.mData.map(message => <Message text={message.text} key={message.id} id={message.id} />)

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
          <MessageForm
          onMessageChange={props.onMessageChange}
          onAddMessage={props.onAddMessage}
          textAreaValue={props.textAreaValue}  
           />
        </div>
      </div>
    </div>
  )
}

export default Posts