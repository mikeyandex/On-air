import { connect } from 'react-redux'
import Music from './Music'


let mapStateToProps = (state) => {
  return {
    songs: state.musicPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  }
}

const MusicContainer = connect(mapStateToProps)(Music)

export default MusicContainer