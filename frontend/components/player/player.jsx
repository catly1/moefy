import React from 'react';
import { Link, Route, Switch, Redirect  } from 'react-router-dom';
import FooterPlayerContainer from '../footer/footer_player_container';
import BrowseContainer from '../browse/browse_container';
import SongIndexContainer from '../songs/song_index_container';
import LeftSiderbarContainer from '../left_sidebar/left_sidebar_container'
import UserShow from '../left_sidebar/user_show'

const Player = (props) => {
    return(
        <div className="player">
            <LeftSiderbarContainer currentUser={props.currentUser}/>
                <Switch>
                    <Route exact path='/player/browse' component={BrowseContainer}/>
                    <Route exact path="/player/songs" component={SongIndexContainer} />
                    <Route exact path='/player/settings/account' component={() => <UserShow currentUser={props.currentUser} logout={props.logout}/>} />
                    <Route path='/player/*' render={() => <Redirect to={{pathname: "/player/browse"}}/>} />
                </Switch>
            <FooterPlayerContainer />
        </div>
    )
}

export default Player