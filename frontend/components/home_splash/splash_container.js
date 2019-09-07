import { connect } from 'react-redux';
import Splash from './splash'

const msp = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
});

const mdp = dispatch => ({

});

export default connect(
    msp, mdp
)(Splash)