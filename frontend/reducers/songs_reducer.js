import {
    RECEIVE_SONGS,
    RECEIVE_SONG
} from '../actions/song_actions'

const SongsReducer = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_SONGS:
            return Object.assign({}, action.songs)
        case RECEIVE_SONG:
            return Object.assign({}, state, {[action.song.id]: action.song})
        default:
            return state;
    }
}

export default SongsReducer