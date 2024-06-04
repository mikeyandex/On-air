import React from 'react';
import classes from './WallCell.module.css';

const WallCell = (props) => {

  return (
    <div className={classes.wall}>
      <div className={classes.userWrapper}>
        <div className={classes.user}></div>
        <div>
          <p className={classes.message}>Михаил Новиков</p>
          <p className={classes.message}>Дата и время</p>
        </div>
      </div>
      <p className={classes.message}>{props.message}</p>
      <div className={classes.likeWrapper}>
        <img src='https://www.jing.fm/clipimg/full/33-330667_two-hearts-clipart-black-and-white-emoji-heart.png' className={classes.like}></img>
        <p className={classes.message}>{' ' + props.like}</p>
      </div>
    </div>
  )
}

export default WallCell;