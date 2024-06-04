import React from 'react';
import classes from './Message.module.css';
import IconM from './../IconM/IconM'

const Message = (props) => {
  return (
  <div className={classes.wrapper}>
    <IconM />
    <p className={classes.message}>{props.text}</p>
  </div>
  )
}

export default Message;