import { RECEIVE_LIKED_SONG, REMOVE_LIKED_SONG, RECEIVE_LIKED_SONGS } from '../actions/liked_song_actions'

const LikedSongsReducer = (state={}, action) => {
    switch (action.type){
        case RECEIVE_LIKED_SONGS:
            return Object.assign({}, action.likedSongs)
        case RECEIVE_LIKED_SONG:
            return Object.assign({}, state, {[ action.likedSong.id ]: action.likedSong})
        case REMOVE_LIKED_SONG:
            const newState = Object.assign({}, state)
            delete newState[action.likedSongId]
            return newState
        default:
            return state;
    }
}

export default LikedSongsReducer