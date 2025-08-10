import { useEffect, useState } from 'react'
import { authAPI } from '../../../../api/api'
import { connect } from 'react-redux'
import { setUserId, setIsFetching, loginMe, logoutMe } from '../../../../redux/authReducer'
import LoginForm from './LoginForm'

const LoginContainer = (props) => {
  
  const [cURL, setCURL] = useState(0)

  useEffect(() => {
    authAPI.getCaptcha().then(data => {
      let captchaURL = data.data.url
      setCURL(captchaURL)
    })
  }, [])



  return (
    <LoginForm
      captchaURL={cURL}
      login={props.login}
      email={props.email}
      loginMe={props.loginMe}
      logoutMe={props.logoutMe}
      setUserId={props.setUserId}
      setIsFetching={props.setUserId} />
  )
}



let mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    login: state.auth.login,
  }
}

const mapDispatchToProps = {
  setUserId: setUserId,
  setIsFetching: setIsFetching,
  loginMe: loginMe,
  logoutMe: logoutMe,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)