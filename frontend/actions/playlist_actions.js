import * as APIUtil from '../util/api_util';

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST'
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST'

export const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist,
});

export const createPlaylist = playlist => dispatch => (
    APIUtil.createPlaylist(playlist).then(playlist =>(
        dispatch(receivePlaylist(playlist))
    ))
);

export const requestPlaylist = id => dispatch => (
    APIUtil.fetchPlaylist(id).then(playlist => dispatch(receivePlaylist(playlist)))
);

const removePlaylist = playlistId => ({
    type: REMOVE_PLAYLIST,
    playlistId
})

export const deletePlaylist = id => dispatch => (
    APIUtil.deletePlaylist(id).then(playlist => dispatch(removePlaylist(id)))
)