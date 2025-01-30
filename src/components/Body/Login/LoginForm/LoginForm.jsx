import React from 'react'
import { Field, reduxForm } from 'redux-form'
import classes from './LoginForm.module.css'

const LoginForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="email" component="input" className={classes.input} placeholder='email' type='email' />
      <Field name="password" component="input" className={classes.input} placeholder='password' type='text' />
      <Field name="rememberMe" component="input" className={classes.checkbox} type='checkbox' />Remember me
      <Field name="captcha" component="input" className={classes.input}placeholder='captcha' type='text' /> 
      <button className={classes.button}>Submit</button>
    </form>
  )
}

const ReduxLoginForm = reduxForm({
  // a unique name for the form
  form: 'loginForm'
})(LoginForm)

export default ReduxLoginForm