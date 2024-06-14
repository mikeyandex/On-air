import React from 'react'
import axios from 'axios'
import Profile from './Profile'
import { addPost, postChange, setProfile } from '../../../redux/profileReducer'
import { connect } from 'react-redux'
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom"

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileID = this.props.router.params.profileID
    if (!profileID) {
      profileID = 2
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileID).then(response => {
      this.props.setProfile(response)
      console.log(this.props)
    })
  }

  render() {
    return <Profile
      postChange={this.props.postChange}
      addPost={this.props.addPost}
      wPage={this.props.wPage}
      textAreaValue={this.props.textAreaValue}
      profileData={this.props.profileData}
      topImage={this.props.topImage}
    />
  }
}



let mapStateToProps = (state) => {
  return {
    wPage: state.wallPage.wallData,
    textAreaValue: state.wallPage.textAreaValue,
    profileData: state.wallPage.profile.data,
    topImage: state.wallPage.topImage,
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
})(withRouter(ProfileContainer))

