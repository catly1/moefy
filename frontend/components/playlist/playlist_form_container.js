import { connect } from 'react-redux';

import PlaylistForm from './playlist_form';
import { createPlaylist } from '../../actions/playlist_actions';

const msp = ({}) => ({

})

const mdp = dispatch => ({
    createPlaylist: playlist => dispatch(createPlaylist(playlist))
});

export default connect(
    msp, mdp
)(PlaylistForm);