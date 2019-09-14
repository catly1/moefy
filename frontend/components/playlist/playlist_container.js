import { connect } from 'react-redux';
import { selectPlaylist } from '../../reducers/selector'
import { requestPlaylist } from '../../actions/playlist_actions'
import Playlist from './playlist';
import { requestSong, playQueue, playSong } from '../../actions/song_actions'

const msp = (state, { match }) => {
    return {
        currentUser: state.entities.users[state.session.id],
        playlist: selectPlaylist(state, parseInt(match.params.playlistId)),
        songs: Object.keys((state.entities.songs)).map(id => state.entities.songs[id]),
        playlistSongs: Object.keys((state.entities.playlistSongs)).map(id => state.entities.playlistSongs[id])
    }
}

const mdp = dispatch => ({
    requestPlaylist: id => dispatch(requestPlaylist(id)),
    requestSong: id => dispatch(requestSong(id)),
    playSong: song => dispatch(playSong(song)),
    playQueue: queue => dispatch(playQueue(queue))
})

export default connect(
    msp,
    mdp
)(Playlist);