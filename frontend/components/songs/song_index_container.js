import { connect } from 'react-redux';
import SongIndex from './song_index';
import { requestSongs, playSong, playQueue, currentSong } from '../../actions/song_actions'


const msp = state => {
    return {
    currentUser: state.entities.users[state.session.id],
    songs: Object.keys((state.entities.songs)).map(id => state.entities.songs[id])
}}

const mdp = dispatch => ({
    requestSongs: () => dispatch(requestSongs()),
    playSong: song => dispatch(playSong(song)),
    playQueue: queue => dispatch(playQueue(queue)),
    currentSong: songId => dispatch(currentSong(songId))
});

export default connect(msp, mdp)(SongIndex)