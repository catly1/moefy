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

export const createPlaylist = playlistForm =>(
    $.ajax({
        method: "POST",
        url: "api/playlists",
        data: playlistForm,
    })
)