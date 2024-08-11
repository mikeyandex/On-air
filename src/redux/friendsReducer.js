import userAPI from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_IS_FOLLOWING = 'SET_IS_FOLLOWING'

const initialState = {
  friendsPage: [],
  pageSize: 5,
  totalCount: 1,
  currentPage: 1,
  isFetching: false,
  isFollowing: [],
}

const friendsReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        friendsPage: [...state.friendsPage.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: true }
          }
          return user
        })],
      }

      break

    case 'UNFOLLOW':
      return {
        ...state,
        friendsPage: [...state.friendsPage.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: false }
          }
          return user
        })],
      }

      break

    case 'SET_USERS':
      return { ...state, friendsPage: [...action.users] }

    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.currentPage }

    case 'SET_TOTAL_COUNT':
      return { ...state, totalCount: action.totalCount }

    case 'SET_IS_FETCHING':
      return { ...state, isFetching: action.isFetching }

    case 'SET_IS_FOLLOWING':
      return {
        ...state, isFollowing:
          action.isFollowing
            ? [...state.isFollowing, action.userID]
            : [state.isFollowing.filter(id => id != action.userID)]
      }

    default:
      return state
  }
}

export const getUsers = (pageSize, currentPage, friendsPageLength) => {
  return (dispatch) => {
    if (friendsPageLength === 0) {
      dispatch(setIsFetching(true))
      dispatch(setCurrentPage(currentPage))
      userAPI.getUser(pageSize, currentPage).then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
        dispatch(setIsFetching(false))
      })
    }
  }
}

export const getPage = (pageSize, pageNumber) => {
  return (dispatch) => {
    dispatch(setIsFetching(true))
    dispatch(setCurrentPage(pageNumber))
    userAPI.getUser(pageSize, pageNumber).then(data => {
      dispatch(setUsers(data.items))
    })
    dispatch(setIsFetching(false))
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(setIsFollowing(true, userId))
    dispatch(setIsFetching(true))
    userAPI.followUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(onFollowClick(userId))
        dispatch(setIsFollowing(false, userId))
        dispatch(setIsFetching(false))
      }
    })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(setIsFetching(true))
    userAPI.unfollowUser(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(onUnFollowClick(userId))
        dispatch(setIsFollowing(false, userId))
        dispatch(setIsFetching(false))
      }
    })
  }
}

export const onFollowClick = (id) => ({ type: FOLLOW, userID: id })

export const onUnFollowClick = (id) => ({ type: UNFOLLOW, userID: id })

export const setUsers = (users) => ({ type: SET_USERS, users: users })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount })

export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching })

export const setIsFollowing = (isFollowing, userID) => ({ type: SET_IS_FOLLOWING, isFollowing, userID })

export default friendsReducer