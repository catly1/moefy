import * as APIUtil from '../util/api_util';

export const RECEIVE_LIKED_SONGS = 'RECEIVE_LIKED_SONGS'
export const RECEIVE_LIKED_SONG = 'RECEIVE_LIKED_SONG'
export const REMOVE_LIKED_SONG = 'REMOVE_LIKED_SONG'

export const receiveLikedSongs = likedSongs => ({
    type: RECEIVE_LIKED_SONGS,
    likedSongs,
});

export const requestLikedSongs = () => (dispatch) => (
    APIUtil.fetchLikedSongs().then(LikedSongs => {
        return dispatch(receiveLikedSongs(LikedSongs))
    })
)

export const receiveLikedSong = likedSong => ({
    type: RECEIVE_LIKED_SONG,
    likedSong,
});



export const createLikedSong = likedSong => dispatch => (
    APIUtil.createLikedSong(likedSong).then(likedSong => (
        dispatch(receiveLikedSong(likedSong))
    ))
);


const removeLikedSong = likedSongId => ({
    type: REMOVE_LIKED_SONG,
    likedSongId
})

export const deleteLikedSong = id => dispatch => (
    APIUtil.deleteLikedSong(id).then(likedSong => 
        {
            return dispatch(removeLikedSong(id))
        })
)