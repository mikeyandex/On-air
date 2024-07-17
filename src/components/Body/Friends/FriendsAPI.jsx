import React from 'react'
import Friends from './Friends'
import userAPI from '../../../api/api'

class FriendsAPI extends React.Component {

  componentDidMount() {
    if (this.props.friends.friendsPage.length === 0) {
      //before
      this.props.setIsFetching(true)      
      userAPI.getUser(this.props.pageSize, this.props.currentPage).then(data => {
        this.props.setUsers(data.items)
        this.props.setTotalCount(data.totalCount)
        //after
        this.props.setIsFetching(false)
      })
    }
  }

  onSelectorClick = (pageNumber) => {
    //before  
    this.props.setIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    userAPI.getUser(this.props.pageSize, pageNumber).then(data => {
      this.props.setUsers(data.items)
    })
    //after
    this.props.setIsFetching(false)
  }

  render() {
    return <Friends
      totalCount={this.props.friends.totalCount} pageSize={this.props.friends.pageSize}
      currentPage={this.props.currentPage}
      isFetching={this.props.friends.isFetching}
      isFollowing={this.props.friends.isFollowing}
      setIsFetching={this.props.setIsFetching}
      setIsFollowing={this.props.setIsFollowing}
      onSelectorClick={this.onSelectorClick}
      friendsPage={this.props.friends.friendsPage}
      onFollowClick={this.props.onFollowClick}
      onUnFollowClick={this.props.onUnFollowClick}
      setCurrentPage={this.props.setCurrentPage}
    />

  }
}

export default FriendsAPI