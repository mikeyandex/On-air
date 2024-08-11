import React from 'react'
import Header from './Header'
import { setAuthData, setIsFetching, authMe } from '../../redux/authReducer'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe()
  }

  render() {
    return <Header
      login={this.props.login}
      isAuth={this.props.isAuth}
      setAuthData={this.props.setAuthData}
      setIsFetching={this.props.setIsFetching}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {
  setIsFetching,
  setAuthData,
  authMe,
})(HeaderContainer)