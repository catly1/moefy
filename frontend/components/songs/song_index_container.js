import { connect } from 'react-redux';
import SongIndex from './song_index';

import { requestSongs, playSong, playQueue } from '../../actions/song_actions'


const msp = state => {
    return {
    songs: Object.keys((state.entities.songs)).map(id => state.entities.songs[id])
}}

const mdp = dispatch => ({
    requestSongs: () => dispatch(requestSongs()),
    playSong: song => dispatch(playSong(song)),
    playQueue: queue => dispatch(playQueue(queue))
});

export default connect(msp, mdp)(SongIndex)