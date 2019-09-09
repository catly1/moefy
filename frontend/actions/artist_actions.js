import * as APIUtil from '../util/api_util';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const receiveArtists = artists => ({
    type: RECEIVE_ARTISTS,
    artists
});

export const requestArtists = () => (dispatch) => (
    APIUtil.fetchArtists().then(artists => {
        return dispatch(receiveArtists(artists))
    })
)

export const receiveArtist = artist => ({
    type: RECEIVE_ARTIST,
    artist,
});

export const requestArtist = id => (dispatch) => (
    APIUtil.fetchArtist(id).then(artist => dispatch(receiveArtist(artist)))
);