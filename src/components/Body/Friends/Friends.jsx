import React from 'react'
import classes from './Friends.module.css'
import userAva from '../../../image/userAva.jpg'
import Preloader from '../../Common/Preloader/Preloader'
import { Routes, Route, Link } from 'react-router-dom'

let Friends = (props) => {
  console.log(props)
  let pagesCount = Math.ceil(props.totalCount / props.pageSize)

  let pages = []//Создаю массив юзеров

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  pages.reverse ()

  return (
    <div className={classes.container}>
      <Preloader isFetching={props.isFetching} />
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
        }
        )
        }

      </div>
      
      {props.friendsPage.map((user) => {

        const followUser = () => {
          props.follow(user.id)
        }
        const unfollowUser = () => {
          props.unfollow(user.id)
        }

        return (
          <div className={classes.list} key={user.id}>
            <Link to={'/profile/' + user.id}>
              <img className={classes.icon} src={user.photos.large != null
                ? user.photos.small
                : userAva} />
            </Link>
            <div className={classes.wrapper}>
              <p className={classes.user}>{user.name}</p>
              <p className={classes.slogan}>{user.status}</p>
              {user.followed === true
                ? <button className={classes.buttonUnfollow} onClick={unfollowUser} disabled={props.isFollowing.some(id => id === user.id)}>ОТПИСАТЬСЯ</button>
                : <button className={classes.buttonFollow} onClick={followUser} disabled={props.isFollowing.some(id => id === user.id)} >ПОДПИСАТЬСЯ</button>}
            </div>
          </div>
        )
      })
      }
    </div >
  )
}

export default Friends