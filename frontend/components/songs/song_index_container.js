import { connect } from 'react-redux';
import SongIndex from './song_index';

import { requestSongs } from '../../actions/song_actions'

const msp = state => {
    // debugger
    return {
    songs: Object.keys((state.entities.songs)).map(id => state.entities.songs[id])
}}

const mdp = dispatch => ({
    requestSongs: () => dispatch(requestSongs())
});

export default connect(msp, mdp)(SongIndex)