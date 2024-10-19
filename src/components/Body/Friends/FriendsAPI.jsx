import React, { useEffect } from 'react'
import Friends from './Friends'

const FriendsAPI = (props) => {
  useEffect(() => {
    props.getUsers(props.pageSize, props.currentPage, props.friends.friendsPage.length)
  }, [])

  useEffect(() => {
    props.getPage(props.pageSize, props.currentPage)
    }, [props.currentPage])
  

  const onSelectorClick = (pageNumber) => {
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

export default FriendsAPI