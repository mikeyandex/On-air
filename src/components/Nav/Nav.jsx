import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import Icon from './../Body/Posts/Icon/Icon'

const Nav = (props) => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/Profile" className={classes.link}>Профиль</NavLink>
      <NavLink to="/Posts" className={classes.link}>Сообщения</NavLink>
      <NavLink to="/News" className={classes.link}>Новости</NavLink>
      <NavLink to="/Friends" className={classes.link}>Друзья</NavLink>
      <NavLink to="/Music" className={classes.link}>Музыка</NavLink>
      <NavLink to="/Settings" className={classes.link}>Настройки</NavLink>
    </nav>
  )
}

export default Nav;