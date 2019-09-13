import * as APIUtil from '../util/api_util';

export const RECEIVE_PLAYLIST_SONG = 'RECEIVE_PLAYLIST_SONG'
export const REMOVE_PLAYLIST_SONG = 'REMOVE_PLAYLIST_SONG'

export const receivePlaylistSong = playlistSong => ({
    type: RECEIVE_PLAYLIST_SONG,
    playlistSong,
});

export const createPlaylistSong = playlistSong => dispatch => (
    APIUtil.createPlaylistSong(playlistSong).then(playlistSong => (
        dispatch(receivePlaylistSong(playlistSong))
    ))
);



const removePlaylistSong = playlistSongId => ({
    type: REMOVE_PLAYLIST_SONG,
    playlistSongId
})

export const deletePlaylistSong = id => dispatch => (
    APIUtil.deletePlaylistSong(id).then(playlistSong => dispatch(removePlaylistSong(id)))
)