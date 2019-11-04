import { connect } from 'react-redux';
import Queue from './queue';
import { playQueue } from '../../actions/song_actions';


const msp = state => {
    return {
        queue: Object.assign([], state.entities.queue),
        songs: state.entities.songs,
        currentSong: state.entities.currentSong
    }
}

const mdp = dispatch => ({
    playQueue: queue => dispatch(playQueue(queue))
})

export default connect(msp, mdp)(Queue)