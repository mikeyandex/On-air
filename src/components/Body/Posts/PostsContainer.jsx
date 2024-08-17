import Posts from './Posts'
import { messageChangeActionCreator, addMessageActionCreator } from '../../../redux/messageReducer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    dPage: state.dialogPage.dialogData,
    mData: state.dialogPage.messageData,
    textAreaValue: state.dialogPage.textAreaValueь,
    isAuth: state.auth.isAuth,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      let action = messageChangeActionCreator(text)
      dispatch(action)
    },
    onAddMessage: () => {
      let action = addMessageActionCreator()
      dispatch(action)
    },
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostsContainer