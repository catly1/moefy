import { connect } from 'react-redux';
import ArtistIndex from './artist_index';

import { requestArtists } from '../../actions/artist_actions';

const msp = state =>({
    artists: 
});

const mdp = dispatch =>({

});

export default connect(msp, mdp)(ArtistIndex)