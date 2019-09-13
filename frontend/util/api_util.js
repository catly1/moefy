import PlaylistForm from "../components/playlist/playlist_form";

export const fetchSongs = () => (
    $.ajax({
        method: 'GET',
        url: 'api/songs'
    })
);

export const fetchSong = id => (
    $.ajax({
        method: 'GET',
        url: `api/songs/${id}`
    })
)

export const fetchArtists = () => (
    $.ajax({
        method: 'GET',
        url: 'api/artists'
    })
);

export const fetchArtist = id => (
    $.ajax({
        method: 'GET',
        url: `api/artists/${id}`
    })
)

export const fetchAlbums = () => (
    $.ajax({
        method: 'GET',
        url: 'api/albums'
    })
);

export const fetchAlbum = id => (
    $.ajax({
        method: 'GET',
        url: `api/albums/${id}`
    })
)

export const fetchPlaylist = id => (
    $.ajax({
        method: 'GET',
        url: `api/playlists/${id}`
    })
)

export const createPlaylist = playlist =>(
    $.ajax({
        method: "POST",
        url: "api/playlists",
        data: {playlist}
    })
)

export const deletePlaylist = id => (
    $.ajax({
        method: "DELETE",
        url: `api/playlists/${id}`
    })
)

export const createPlaylistSong = playlistSong =>(
    $.ajax({
        method: "POST",
        url: "api/"
    })
)

export const deletePlaylistSong = id =>{
    $.ajax({
        method: "DELETE",
        url: `api/playlistsongs/${id}`
    })
}