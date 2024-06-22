import React from 'react'
import axios from 'axios'
import Header from './Header'
import { setAuthData, setIsFetching } from '../../redux/authReducer'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {
  componentDidMount() {

    //before
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
      if (response.data.resultCode === 0) {
      this.props.setAuthData(response.data.data)
      }
      debugger
      //after
      this.props.setIsFetching(false)
    })
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
})(HeaderContainer)