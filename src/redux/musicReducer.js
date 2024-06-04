const PLAY = 'PLAY'
const STOP = 'STOP'
const PAUSE = 'PAUSE'

const initialState = {
  musicPage: [
    {
      src: 'http://streaming.tdiradio.com:8000/house.mp3',
      author: 'author',
      name: 'name',
      id: '0',
    },
    {
      src: 'http://streaming.tdiradio.com:8000/house.mp3',
      author: 'author',
      name: 'name',
      id: '1',
    },
    {
      src: 'http://streaming.tdiradio.com:8000/house.mp3',
      author: 'author',
      name: 'name',
      id: '2',
    },
  ],
}

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY':
      return {

      }

    default:
      return state
  }



}



export default musicReducer