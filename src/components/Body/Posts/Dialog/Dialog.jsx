import React from 'react';
import classes from './Dialog.module.css'
import Icon from './../Icon/Icon'

const Dialog = (props) => {
  return (
    <div className={classes.wrapper}>
      <Icon />
      <p className={classes.dialog}>{props.user}</p>
    </div>
  )
}

export default Dialog