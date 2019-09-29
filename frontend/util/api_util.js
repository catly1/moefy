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

export const createPlaylistSong = playlist_song =>(
    $.ajax({
        method: "POST",
        url: "api/playlistsongs",
        data: {playlist_song}
    })
)

export const deletePlaylistSong = id =>(
    $.ajax({
        method: "DELETE",
        url: `api/playlistsongs/${id}`
    })
)

export const fetchPlaylistSongs = () =>(
    $.ajax({
        method: 'GET',
        url: 'api/playlistsongs'
    })
);

export const createLikedSong = liked_song => (
    $.ajax({
        method: "POST",
        url: "api/liked_songs",
        data: { liked_song }
    })
)

export const deleteLikedSong = id => (
    $.ajax({
        method: "DELETE",
        url: `api/liked_songs/${id}`
    })
)

export const fetchLikedSongs = () => (
    $.ajax({
        method: 'GET',
        url: 'api/liked_songs'
    })
);