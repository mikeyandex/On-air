import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'
import Preloader from '../Common/Preloader/Preloader'


const Header = (props) => {
  return (
    <header className={classes.header}>
      <Preloader isFetching={props.isFetching} />
      <div className={classes.logoWrapper}>
        <div className={classes.logo} />
        <h2 className={classes.logoText}>Эфир</h2>
      </div>
      <NavLink className={classes.userWrapper}>
        <p className={classes.user}>{
          props.isAuth === true
            ? props.login
            : 'login'}
        </p>
      </NavLink>
    </header>
  )
}

export default Header