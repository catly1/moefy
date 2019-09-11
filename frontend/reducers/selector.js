export const selectAlbum = (state, id) => {
    return state.entities.albums[id]
}