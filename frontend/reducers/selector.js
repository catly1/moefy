export const selectAlbum = (state, id) => {
    return state.entities.albums[id]
}

export const selectArtist = (state, id) => {
    return state.entities.artists[id]
}

export const selectPlaylist = (state, id) => {
    return state.entities.playlist[id]
}