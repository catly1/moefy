import * as APIUtil from '../util/api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONG_TO_PLAY = 'RECEIVE_SONG_TO_PLAY';
export const RECEIVE_QUEUE = 'RECEIVE_QUEUE';
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG"

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

export const receiveQueue = queue => ({
    type: RECEIVE_QUEUE,
    queue
});

export const playQueue = queue => dispatch => (
    dispatch(receiveQueue(queue))
);

export const receiveCurrentSong = songId => ({
    type: RECEIVE_CURRENT_SONG,
    songId
})

export const currentSong = songId => dispatch => (
    dispatch(receiveCurrentSong(songId))
)