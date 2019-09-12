import * as APIUtil from '../util/api_util';

export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST'

export const receivePlaylist = playlist => ({
    type: RECEIVE_PLAYLIST,
    playlist,
});

export const createPlaylist = playlist => dispatch => (
    APIUtil.fetchPlaylist(playlist).then(playlist =>(
        dispatch(receivePlaylist(playlist))
    ))
);

export const requestPlaylist = id => dispatch => (
    APIUtil.fetchPlaylist(id).then(playlist => dispatch(receivePlaylist(playlist)))
);
