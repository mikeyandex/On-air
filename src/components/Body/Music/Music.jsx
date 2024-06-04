import React from 'react'
import useSound from 'use-sound'
import classes from './Music.module.css'

const Music = (props) => {

  const arrSong = props.songs.musicPage.map((array) => {
    return (
      
      <div className={classes.list} key={array.id}>

      <audio controls src={array.src} type="audio/mpeg" />
      </div>
    )
  })
  return arrSong
}

export default Music