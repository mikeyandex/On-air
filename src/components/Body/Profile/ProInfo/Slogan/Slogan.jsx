import React, { useState, useRef } from 'react'
import classes from './Slogan.module.css'

const Slogan = (props) => {
  let [editMode, setEditMode] = useState(false)

  let [tempStatus, settempStatus] = useState('')

  const setTrue = () => {
    setEditMode(true)
  }

  const setFalse = () => {
    inputRef.current.focus()
    setEditMode(false)
    if (!tempStatus) {
      tempStatus = 'Статуса нет'
    }
    props.updateStatus(tempStatus)
  }

  const sendStatus = (e) => {
    settempStatus(e.target.value)
  }

  const inputRef = useRef('')


  return (
    <div>
      <p className={editMode === false
        ? classes.slogan
        : classes.invisible}
        onClick={setTrue} autofocus>
        {props.status != null
          ? props.status
          : ' '
        }
      </p>

      <input 
        className={editMode === false
          ? classes.invisible
          : classes.inputField}
        ref={inputRef}
        onClick={setFalse}
        type='text'
        onChange={sendStatus}
      />
    </div>
  )
}

export default Slogan