import { connect } from 'react-redux';
import FooterPlayer from './footer_player';
import { createLikedSong, deleteLikedSong } from '../../actions/liked_song_actions';
import { currentSong } from '../../actions/song_actions'

const msp = state => {
    return{
    queue: Object.assign([], state.entities.queue),
    songs: state.entities.songs,
    currentUser: state.entities.users[state.session.id],
    likedSongs: Object.keys(state.entities.likedSongs).map(id => state.entities.likedSongs[id]),
}}

const mdp = dispatch => ({
    createLikedSong: likedSong => dispatch(createLikedSong(likedSong)),
    deleteLikedSong: id => dispatch(deleteLikedSong(id)),
    currentSong: songId => dispatch(currentSong(songId))
})

export default connect(
    msp, mdp
)(FooterPlayer)