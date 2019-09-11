import * as APIUtil from '../util/api_util';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const receiveAlbums = albums => ({
    type: RECEIVE_ALBUMS,
    albums
});

export const requestAlbums = () => (dispatch) => (
    APIUtil.fetchAlbums().then(albums => {
        return dispatch(receiveAlbums(albums))
    })
)

export const receiveAlbum = album => ({
    type: RECEIVE_ALBUM,
    album,
});

export const requestAlbum = id => (dispatch) => (
    APIUtil.fetchAlbum(id).then(album => dispatch(receiveAlbum(album)))
);