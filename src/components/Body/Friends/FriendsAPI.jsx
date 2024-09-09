import React, { useEffect } from 'react'
import Friends from './Friends'

const FriendsAPI = (props) => {
  useEffect(() => {
    props.getUsers(props.pageSize, props.currentPage, props.friends.friendsPage.length)
  }, [])

  useEffect(() => {
    props.getPage(props.pageSize, props.currentPage)
    }, [props.currentPage])
  

  let onSelectorClick = (pageNumber) => {
      props.setCurrentPage(pageNumber)
    }

  return (
    <Friends
      totalCount={props.friends.totalCount} 
      pageSize={props.friends.pageSize}
      currentPage={props.currentPage}
      isFetching={props.friends.isFetching}
      isFollowing={props.friends.isFollowing}
      onSelectorClick={onSelectorClick}
      friendsPage={props.friends.friendsPage}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  )
}
/*
class FriendsAPI extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage, this.props.friends.friendsPage.length)
  }

  onSelectorClick = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.getPage(this.props.pageSize, this.props.currentPage)
    }
  }

  render() {
    return <Friends
      totalCount={this.props.friends.totalCount} pageSize={this.props.friends.pageSize}
      currentPage={this.props.currentPage}
      isFetching={this.props.friends.isFetching}
      isFollowing={this.props.friends.isFollowing}
      onSelectorClick={this.onSelectorClick}
      friendsPage={this.props.friends.friendsPage}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
    />

  }
}
*/
export default FriendsAPI