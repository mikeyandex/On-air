import FriendsAPI from './FriendsAPI'
import { connect } from 'react-redux'
import { getUsers, getPage, follow, unfollow, setCurrentPage } from '../../../redux/friendsReducer'
import { getFriendsPage, getPageSize, getTotalCount, getCurrentPage } from '../../../redux/selectors'

let mapStateToProps = (state) => {
  return {
    friends: getFriendsPage(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
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