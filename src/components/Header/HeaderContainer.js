import {useEffect }  from 'react'
import Header from './Header'
import { setAuthData, setIsFetching, authMe } from '../../redux/authReducer'
import { connect } from 'react-redux'

const HeaderContainer = (props) => {
  useEffect(() => {
    props.authMe()
  }, [])

  return (
    <Header
      login={props.login}
      isAuth={props.isAuth}
      setIsFetching={props.setIsFetching}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {
  setIsFetching,
  setAuthData,
  authMe,
})(HeaderContainer)