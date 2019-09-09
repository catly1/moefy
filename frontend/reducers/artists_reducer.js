import {
    RECEIVE_ARTISTS,
    RECEIVE_ARTIST,
} from '../actions/artist_actions'

const ArtistsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ARTISTS:
            return Object.assign({}, action.artists)
        case RECEIVE_ARTIST:
            return Object.assign({}, state, { [action.artist.id]: action.artist })
        default:
            return state;
    }
}

export default ArtistsReducer