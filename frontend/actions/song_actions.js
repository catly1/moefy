import * as APIUtil from '../util/api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONG_TO_PLAY = 'RECEIVE_SONG_TO_PLAY';

export const receiveSongs = songs => ({
    type: RECEIVE_SONGS,
    songs
});

export const requestSongs = () => (dispatch) => (
  APIUtil.fetchSongs().then(songs => {
      return dispatch(receiveSongs(songs))})
)

export const receiveSong = song => ({
    type: RECEIVE_SONG,
    song,
});

export const requestSong = (id) => (dispatch) => (
    APIUtil.fetchSong(id).then(song => dispatch(receiveSong(song)))
);

export const receiveSongToPlay = songId => ({
    type: RECEIVE_SONG_TO_PLAY,
    songId,
});

export const playSong = songId => dispatch => (
    dispatch(receiveSongToPlay(songId))
)
