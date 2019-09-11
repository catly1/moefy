import { connect } from 'react-redux';
import AlbumIndex from './album_index';

import { requestAlbums } from '../../actions/album_actions'

const msp = state =>({
    albums: Object.keys((state.entities.albums)).map(id => state.entities.albums[id])
})

const mdp = dispatch => ({
    requestAlbums: () => dispatch(requestAlbums())
});

export default connect(msp, mdp)(AlbumIndex)