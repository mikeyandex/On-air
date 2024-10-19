import React, { useState } from 'react'
import classes from './Slogan.module.css'

const Slogan = (props) => {

    let [editMode, setEditMode] = useState(false)

    const toggle = () => {
      setEditMode(editMode === false
        ? editMode = true
        : editMode = false
      )
    }

  return (
    <div>
      <p className={editMode === false
        ? classes.slogan
        : classes.invisible} 
        onDoubleClick={toggle}>
        {props.status != null
        ? props.status
        : ' '
      }</p>

      <input className={editMode === false
        ? classes.invisible
        : classes.inputField} 
          onDoubleClick={toggle}
        />
    </div>
  )
}

export default Slogan