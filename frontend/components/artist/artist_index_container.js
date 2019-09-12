import { connect } from 'react-redux';
import ArtistIndex from './artist_index';

import { requestArtists } from '../../actions/artist_actions';

const msp = state =>({
    artists: Object.keys((state.entities.artists)).map(id => state.entities.artists[id])
});

const mdp = dispatch =>({
    requestArtists: () => dispatch(requestArtists())
});

export default connect(msp, mdp)(ArtistIndex)