import FriendsAPI from './FriendsAPI'
import { connect } from 'react-redux'
import { getUsers, getPage, follow, unfollow, setCurrentPage } from '../../../redux/friendsReducer'

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage,
    pageSize: state.friendsPage.pageSize,
    totalCount: state.friendsPage.totalCount,
    currentPage: state.friendsPage.currentPage,
  }
}

const FriendsContainer = connect(mapStateToProps, {
  getUsers,
  getPage,
  follow,
  unfollow,
  setCurrentPage,
})
  (FriendsAPI)

export default FriendsContainer