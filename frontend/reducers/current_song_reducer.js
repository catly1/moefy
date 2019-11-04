import { RECEIVE_CURRENT_SONG } from '../actions/song_actions'

const CurrentSongReducer = (state = "", action) => {
    switch(action.type){
        case RECEIVE_CURRENT_SONG:
            return action.songId
        default:
            return state;
    }
}

export default CurrentSongReducer