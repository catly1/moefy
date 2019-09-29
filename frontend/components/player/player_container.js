import { connect } from 'react-redux';
import Player from './player'
import { logout } from '../../actions/session_actions'
import { requestSongs, playSong, playQueue } from '../../actions/song_actions'
import { requestPlaylistSongs } from '../../actions/playlist_song_actions';
import { requestLikedSongs } from '../../actions/liked_song_actions'

const msp = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    requestSongs: () => dispatch(requestSongs()),
    requestPlaylistSongs: () => dispatch(requestPlaylistSongs()),
    requestLikedSongs: () => dispatch(requestLikedSongs())
});

export default connect( msp, mdp)(Player)