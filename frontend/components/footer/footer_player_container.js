import { connect } from 'react-redux';
import FooterPlayer from './footer_player';

const msp = state => {
    return{
    queue: Object.assign([], state.entities.queue),
    songs: state.entities.songs
}}

const mdp = dispatch => ({

})

export default connect(
    msp, mdp
)(FooterPlayer)