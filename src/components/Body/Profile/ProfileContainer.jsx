import React, { useEffect } from 'react'
import Profile from './Profile'
import { addPost, postChange, setProfile, getProfile, getStatus, updateStatus } from '../../../redux/profileReducer'
import { connect } from 'react-redux'
import WithAuthRedirect from '../../../HOC/WithAuthRedirect'
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"
import { compose } from 'redux'

const ProfileContainer = (props) => {
  
  useEffect(() => {
    let userid = props.router.params.profileID
    if (!userid) {
      props.getProfile(props.id)
      props.getStatus(props.id)
    }
    else
      if (userid) {
        props.getProfile(userid)
        props.getStatus(userid)
      }
  }, [])

  return (
    <Profile
      postChange={props.postChange
      }
      addPost={props.addPost}
      wPage={props.wPage}
      textAreaValue={props.textAreaValue}
      profileData={props.profileData}
      setTopImage={props.setTopImage}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    wPage: state.wallPage.wallData,
    textAreaValue: state.wallPage.textAreaValue,
    profileData: state.wallPage.profile.data,
    status: state.wallPage.status,
    login: state.auth.login,
    id: state.auth.id,
  }
}

function withRouter(AuthRedirectComponent) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return (
      <AuthRedirectComponent
        {...props}
        router={{ location, navigate, params }}
      />
    )
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, {
    postChange,
    addPost,
    setProfile,
    getProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)