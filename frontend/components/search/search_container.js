import { connect } from 'react-redux';
import Search from './search';
import { requestAlbums } from '../../actions/album_actions';
import { requestArtists } from '../../actions/artist_actions';
import { playQueue } from '../../actions/song_actions'

const msp = state => {
    return {
        songs: Object.keys((state.entities.songs)).map(id => state.entities.songs[id]),
        artists: Object.keys((state.entities.artists)).map(id => state.entities.artists[id]),
        albums: Object.keys((state.entities.albums)).map(id => state.entities.albums[id]),
}}

const mdp = dispatch => ({
    requestAlbums: () => dispatch(requestAlbums()),
    requestArtists: () => dispatch(requestArtists()),
    playQueue: queue => dispatch(playQueue(queue))
})

export default connect(msp,mdp)(Search)