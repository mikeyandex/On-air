import React from 'react'
import Profile from './Profile'
import { addPost, postChange, setProfile, getProfile } from '../../../redux/profileReducer'
import { connect } from 'react-redux'
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.router.params.profileID)
  }

  render() {
    return <Profile
      postChange={this.props.postChange
      }
      addPost={this.props.addPost}
      wPage={this.props.wPage}
      textAreaValue={this.props.textAreaValue}
      profileData={this.props.profileData}
      topImage={this.props.topImage}
      setTopImage={this.props.setTopImage}
      isAuth={this.props.isAuth}
    />
  }
}



let mapStateToProps = (state) => {
  return {
    wPage: state.wallPage.wallData,
    textAreaValue: state.wallPage.textAreaValue,
    profileData: state.wallPage.profile.data,
    topImage: state.wallPage.topImage,
    isAuth: state.auth.isAuth,
  }
}



function withRouter(ProfileContainer) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <ProfileContainer
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
})(withRouter(ProfileContainer))

