import { connect } from 'react-redux';
import { selectAlbum } from '../../reducers/selector';
import Album from './album';
import {requestAlbum} from '../../actions/album_actions'
import {requestSong, playQueue, playSong} from '../../actions/song_actions'

const msp = (state, {match}) => {
    return {
        album: selectAlbum(state, parseInt(match.params.albumId)),
        songs: Object.keys((state.entities.songs)).map(id => state.entities.songs[id])
}}

const mdp = dispatch => ({
    requestAlbum: id => dispatch(requestAlbum(id)),
    requestSong: id => dispatch(requestSong(id)),
    playSong: song => dispatch(playSong(song)),
    playQueue: queue => dispatch(playQueue(queue))
})

export default connect(
    msp,
    mdp
)(Album);