import { connect } from 'react-redux';
import SongIndexItem from './song_index_item'
import { createPlaylistSong, deletePlaylistSong } from '../../actions/playlist_song_actions'
import { requestSongs, playSong, playQueue } from '../../actions/song_actions'


const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id],
        songs: Object.keys((state.entities.songs)).map(id => state.entities.songs[id]),
        currentSong: state.entities.currentSong
    }
}

const mdp = dispatch => ({
    createPlaylistSong: playlistSong => dispatch(createPlaylistSong(playlistSong)),
    deletePlaylistSong: id => dispatch(deletePlaylistSong(id))
});

export default connect(msp, mdp)(SongIndexItem)