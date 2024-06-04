import Profile from './Profile'
import { addPostActionCreator, postChangeActionCreator } from '../../../redux/profileReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  
  return {
    wPage: state.wallPage.wallData,
    textAreaValue: state.wallPage.textAreaValue
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (text) => {
      let action = postChangeActionCreator(text)
      dispatch(action)
    },
    onAddPost: () => {
      let action = addPostActionCreator()
      dispatch(action)
    },
  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer