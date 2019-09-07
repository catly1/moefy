import { connect } from 'react-redux';
import Player from './player'
import { logout } from '../../actions/session_actions'

const msp = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

const mdp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect( msp, mdp)(Player)