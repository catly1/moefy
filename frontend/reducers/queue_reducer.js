import { RECEIVE_SONG_TO_PLAY, RECEIVE_QUEUE } from '../actions/song_actions'

const QueueReducer = (state = [], action) => {
    switch(action.type){
        case RECEIVE_QUEUE:
            return action.queue
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