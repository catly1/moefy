import { connect } from 'react-redux';
import Artist from './artist';
import { selectArtist } from '../../reducers/selector'
import {requestArtist} from '../../actions/artist_actions'
import { requestSong, playQueue, playSong } from '../../actions/song_actions'

const msp = (state, {match}) => {
    return{
    artist: selectArtist(state, parseInt(match.params.artistId)),
    songs: Object.keys((state.entities.songs)).map(id => state.entities.songs[id])
}}

const mdp = dispatch => ({
    requestArtist: id => dispatch(requestArtist(id)),
    playSong: song => dispatch(playSong(song)),
    playQueue: queue => dispatch(playQueue(queue))
})

export default connect(
    msp,
    mdp
)(Artist);