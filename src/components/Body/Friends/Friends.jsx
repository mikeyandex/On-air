import React from 'react'
import classes from './Friends.module.css'
import userAva from '../../../image/userAva.jpg'

let Friends = (props) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize)

  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>

      <div className={classes.selector}>
        {pages.map(p => {
          if (p === 1 || p === pagesCount || (p >= props.currentPage - 2 && p <= props.currentPage + 2)) {
            return (
              <span
                key={p}
                className={props.currentPage === p
                  ? classes.selected
                  : classes.unSelected
                }
                onClick={() => {
                  props.onSelectorClick(p)
                }}>{p} </span>
            );
          } else if (p === props.currentPage - 3 || p === props.currentPage + 3) {
            return <span key={p}>..... </span>;
          } else {
            return null;
          }
        })}
        <div className={props.isFetching === true
          ? classes.preloader
          : classes.preloaderNone} />
      </div>


      {props.friendsPage.map((array) => {

        return (
          <div className={classes.list} key={array.id}>
            <img className={classes.icon} src={array.photos.large != null ? array.photos.small : userAva} />
            <div className={classes.wrapper}>
              <p className={classes.user}>{array.name}</p>

              <div className={array.followed === true
                ? classes.followMark
                : classes.unfollowMark} />

              <p className={classes.slogan}>{array.status}</p>

              {array.followed === true
                ? <button className={classes.button} onClick={() => props.onUnFollowClick(array.id)}>UNFOLLOW</button>
                : <button className={classes.button} onClick={() => props.onFollowClick(array.id)}>FOLLOW</button>}
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default Friends