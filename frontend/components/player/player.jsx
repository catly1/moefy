import React from 'react';
import { Link, Route, Switch  } from 'react-router-dom';
import FooterPlayerContainer from '../footer/footer_player_container';
import BrowseContainer from '../browse/browse_container';
import SongIndexContainer from '../songs/song_index_container';
import LeftSiderbarContainer from '../leftSidebar/left_sidebar_container'

const Player = (props) => {

    return(
        <div className="player">
            <LeftSiderbarContainer/>
            <Switch>
                <Route exact path='/player/browse' component={BrowseContainer}/>
                <Route exact path="/player/songs" component={SongIndexContainer} />
            </Switch>
            <FooterPlayerContainer />
        </div>
    )
}

export default Player