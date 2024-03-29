import { connect } from 'react-redux';
import Library from './library'
import { playQueue } from '../../actions/song_actions'
import { deleteLikedSong } from '../../actions/liked_song_actions'

const msp = state =>{
    return{
        songs: state.entities.songs,
        currentUser: state.entities.users[state.session.id],
        likedSongs: Object.keys(state.entities.likedSongs).map(id => state.entities.likedSongs[id]),
}}

const mdp = dispatch => ({
    deleteLikedSong: id => dispatch(deleteLikedSong(id)),
    playQueue: queue => dispatch(playQueue(queue))
})

export default connect(msp, mdp)(Library)