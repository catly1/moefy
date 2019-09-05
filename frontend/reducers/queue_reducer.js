import { RECEIVE_SONG_TO_PLAY } from '../actions/song_actions'

const QueueReducer = (state = [], action) => {
    switch(action.type){
        case RECEIVE_SONG_TO_PLAY:
            let newState = Object.assign([], state)
            if (state) {
                newState.push(action.songId)
            } else {
                newState = [action.songId]
            }
            return newState
        default: 
            return state;
    }
}

export default QueueReducer