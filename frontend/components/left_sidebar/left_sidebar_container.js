import { connect } from 'react-redux';
import LeftSiderbar from './left_sidebar';
import { requestPlaylist } from '../../actions/playlist_actions'


const msp = ({ session, entities: { users, playlists } }) => ({
    currentUser: users[session.id],
    playlists
})

const mdp = dispatch => ({
    requestPlaylist: playlistId => dispatch(requestPlaylist(playlistId))
})

export default connect(
    msp, mdp
)(LeftSiderbar)