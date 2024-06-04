import React from 'react'
import useSound from 'use-sound'
import classes from './Music.module.css'

const Music = (props) => {

  const soundClick = () => {
    let audio = new Audio()
    audio.src = "http://streaming.tdiradio.com:8000/house.mp3"
    audio.play()
  }

  const [playSound] = useSound('radio.mp3')
  const context = new AudioContext()
  context.resume()

  

  return (
    <div className={classes.music}>
      <span>Music</span>
      <ul>
        <li><audio src={props.songs} controls/></li>
      </ul>





      <button onClick={playSound} className={classes.click} />
      

    </div>
  )
}

export default Music