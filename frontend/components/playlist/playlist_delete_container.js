import { connect } from 'react-redux';
import PlaylistDelete from './playlist_delete'
import { deletePlaylist } from '../../actions/playlist_actions'

const msp = ({}) => ({})

const mdp = dispatch => ({
    deletePlaylist: id => dispatch(deletePlaylist(id))
})

export default connect( msp, mdp )(PlaylistDelete)