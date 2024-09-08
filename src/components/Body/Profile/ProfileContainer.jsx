import React, { useEffect } from 'react'
import Profile from './Profile'
import { addPost, postChange, setProfile, getProfile } from '../../../redux/profileReducer'
import { connect } from 'react-redux'
import WithAuthRedirect from '../../../HOC/WithAuthRedirect'
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"

const ProfileContainer = (props) => {
  useEffect(() => {
    props.getProfile(props.router.params.profileID)
  }, [])

  return (
    <Profile
      postChange={props.postChange
      }
      addPost={props.addPost}
      wPage={props.wPage}
      textAreaValue={props.textAreaValue}
      profileData={props.profileData}
      topImage={props.topImage}
      setTopImage={props.setTopImage}
    />
  )
}

let mapStateToProps = (state) => {
  return {
    wPage: state.wallPage.wallData,
    textAreaValue: state.wallPage.textAreaValue,
    profileData: state.wallPage.profile.data,
    topImage: state.wallPage.topImage,
  }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

function withRouter(AuthRedirectComponent) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <AuthRedirectComponent
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {
  postChange,
  addPost,
  setProfile,
  getProfile,
})(withRouter(AuthRedirectComponent))


