import { connect } from 'react-redux';

import Song from './song';
import { requestSong } from '../../actions/song_actions'

const msp = (state, { match }) => {
    const songId = parseInt(match.params.songId)
    const song = state.entities.songs[songId]
    return{
    song
    }
};

const mdp = dispatch => ({
    requestSong: id => dispatch(requestSong(id))
});

export default connect(msp,mdp)(Song)