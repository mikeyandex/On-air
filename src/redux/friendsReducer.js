const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

const initialState = {
  friendsPage: [],
  pageSize: 5,
  totalCount: 1,
  currentPage: 5,
  isFetching: false,
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
      return { ...state,  isFetching: action. isFetching }

    default:
      return state
  }
}


export const onFollowClick = (id) => ({ type: FOLLOW, userID: id })

export const onUnFollowClick = (id) => ({ type: UNFOLLOW, userID: id })

export const setUsers = (users) => ({ type: SET_USERS, users: users })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount})

export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching})

export default friendsReducer