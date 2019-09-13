import { connect } from 'react-redux';

import PlaylistForm from './playlist_form';
import { createPlaylist } from '../../actions/playlist_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.id],
})

const mdp = dispatch => ({
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
    msp, mdp
)(PlaylistForm);