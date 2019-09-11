import { connect } from 'react-redux';
import Player from './player'
import { logout } from '../../actions/session_actions'
import { requestSongs, playSong, playQueue } from '../../actions/song_actions'

const msp = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    requestSongs: () => dispatch(requestSongs())
});

export default connect( msp, mdp)(Player)