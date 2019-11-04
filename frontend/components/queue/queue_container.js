import { connect } from 'react-redux';
import Queue from './queue'

const msp = state => {
    return {
        queue: Object.assign([], state.entities.queue),
        songs: state.entities.songs,
        currentSong: state.entities.currentSong
    }
}

const mdp = dispatch => ({

})

export default connect(msp, mdp)(Queue)