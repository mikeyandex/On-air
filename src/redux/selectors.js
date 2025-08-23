export const getFriendsPage = (state) => {
  return state.friendsPage
}

export const getPageSize = (state) => {
  return state.friendsPage.pageSize
}

export const getTotalCount = (state) => {
  return state.friendsPage.totalCount
}

export const getCurrentPage = (state) => {
  return state.friendsPage.currentPage
}