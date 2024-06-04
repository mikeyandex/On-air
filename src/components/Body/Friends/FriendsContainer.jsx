import React from 'react'
import axios from 'axios'
import Friends from './Friends'
import FriendsAPI from './FriendsAPI'
import { connect } from 'react-redux'
import { onFollowClick, onUnFollowClick, setUsers, setCurrentPage, setTotalCount, setIsFetching } from '../../../redux/friendsReducer'

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage,
    pageSize: state.friendsPage.pageSize,
    totalCount: state.friendsPage.totalCount,
    currentPage: state.friendsPage.currentPage,
  }
}

const FriendsContainer = connect(mapStateToProps, {
  onFollowClick,
  onUnFollowClick,
  setUsers,
  setTotalCount,
  setCurrentPage,
  setIsFetching
})
  (FriendsAPI)

export default FriendsContainer