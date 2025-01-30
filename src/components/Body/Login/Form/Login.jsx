import React, { useEffect } from 'react'
import ReduxLoginForm from '../LoginForm/LoginForm'
import { setUserId, loginMe } from '../../../../redux/authReducer'
import classes from './Login.module.css'
import { connect } from 'react-redux'

const Login = (props) => {
 
  const handleSubmit = (values) => {
   loginMe(values.email, values.password, values.rememberMe)
  }
  
  return (
    <div className={classes.background}>
      <h1 className={classes.login}>Login</h1>
      <ReduxLoginForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default connect(null, {
  loginMe,
})(Login)