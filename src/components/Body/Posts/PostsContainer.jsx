import { messageChangeActionCreator, addMessageActionCreator } from '../../../redux/messageReducer'
import { connect } from 'react-redux'
import WithAuthRedirect from '../../../HOC/WithAuthRedirect'
import Posts from './Posts'
import { compose } from 'redux'


let mapStateToProps = (state) => {
  return {
    dPage: state.dialogPage.dialogData,
    mData: state.dialogPage.messageData,
    textAreaValue: state.dialogPage.textAreaValue,
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(Posts)