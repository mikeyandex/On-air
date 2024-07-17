import React from 'react'
import userAPI from '../../api/api'
import Header from './Header'
import { setAuthData, setIsFetching } from '../../redux/authReducer'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component {
  componentDidMount() {

    //before
    this.props.setIsFetching(true)
    userAPI.authMe().then(data => {
      if (data.resultCode === 0) {
      this.props.setAuthData(data.data)
      }
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