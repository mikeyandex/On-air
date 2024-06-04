import React from 'react'
import axios from 'axios'
import Friends from './Friends'

class FriendsAPI extends React.Component {

  componentDidMount() {
    if (this.props.friends.friendsPage.length === 0) {
      //before
      this.props.setIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount)
        //after
        this.props.setIsFetching(false)
      })
    }
  }

  onSelectorClick = (pageNumber) => {
    //before  
    this.props.setIsFetching(true)  
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`).then(response => {
      this.props.setUsers(response.data.items)
    })
    //after
    this.props.setIsFetching(false)
  }

  render() {
    return <Friends
      totalCount={this.props.friends.totalCount} pageSize={this.props.friends.pageSize}
      currentPage={this.props.currentPage}
      isFetching={this.props.friends.isFetching}
      setIsFetching={this.props.setIsFetching}
      onSelectorClick={this.onSelectorClick}
      friendsPage={this.props.friends.friendsPage}
      onFollowClick={this.props.onFollowClick}
      onUnFollowClick={this.props.onUnFollowClick}
      setCurrentPage={this.props.setCurrentPage}
    />

  }
}

export default FriendsAPI