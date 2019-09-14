import { RECEIVE_PLAYLIST_SONG, REMOVE_PLAYLIST_SONG, RECEIVE_PLAYLIST_SONGS } from '../actions/playlist_song_actions'

const PlaylistSongsReducer = (state={}, action) => {
    switch (action.type){
        case RECEIVE_PLAYLIST_SONGS:
            return Object.assign({}, action.playlistSongs)
        case RECEIVE_PLAYLIST_SONG:
            return Object.assign({}, state, {[ action.playlistSong.id]: action.playlistSong})
        case REMOVE_PLAYLIST_SONG:
            const newState = Object.assign({}, state)
            delete newState[action.playlistSongId]
            return newState
        default:
            return state;

    }
}

export default PlaylistSongsReducer