import React from 'react'
import classes from './Preloader.module.css'

const Preloader = (props) => {
  return (
    <div className={props.isFetching === true
      ? classes.preloader
      : classes.preloaderNone} />
  )
}

export default Preloader