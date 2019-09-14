import { connect } from 'react-redux';
import ContextMenu from './context_menu'
import { createPlaylistSong, deletePlaylistSong } from '../../actions/playlist_song_actions'
import { requestPlaylist } from '../../actions/playlist_actions'
import { requestPlaylistSongs } from '../../actions/playlist_song_actions'

const msp = ({ session, entities: { users, playlists, playlistSongs } }) => ({
    currentUser: users[session.id],
    playlists: Object.keys((playlists)).map(id => playlists[id]),
    playlistSongs: Object.keys(playlistSongs).map(id => playlistSongs[id])
})

const mdp = dispatch => ({
    requestPlaylist: playlistId => dispatch(requestPlaylist(playlistId)),
    createPlaylistSong: playlistSong => dispatch(createPlaylistSong(playlistSong)),
    deletePlaylistSong: id => dispatch(deletePlaylistSong(id)),
    requestPlaylistSongs: () => dispatch(requestPlaylistSongs())
})

export default connect(
    msp, mdp
)(ContextMenu)