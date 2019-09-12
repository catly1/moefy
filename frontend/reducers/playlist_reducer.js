import { RECEIEVE_PLAYLIST } from '../actions/playlist_actions'

const PlaylistsReducer = (state = {}, action) => {
    switch (action.type){
        case RECEIEVE_PLAYLIST:
            return Object.assign({}, state, { [action.playlist.id]: action.playlist })
        default:
            return state;
    }
}

export default PlaylistsReducer