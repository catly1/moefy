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
            <div className="player-top">
            <LeftSiderbarContainer currentUser={props.currentUser}/>

                    <Switch>
                        <Route className="player-main-view" exact path='/player/browse' component={() => <BrowseContainer currentUser={props.currentUser}/>}/>
                        <Route className="player-main-view" exact path="/player/songs" component={SongIndexContainer} />
                        <Route className="player-main-view" exact path='/player/settings/account' component={() => <UserShow currentUser={props.currentUser} logout={props.logout}/>} />
                        <Route path='/player/*' render={() => <Redirect to={{pathname: "/player/browse"}}/>} />
                    </Switch>
            </div>
            <div className="player-bottom">
            <FooterPlayerContainer />
            </div>
        </div>
    )
}

export default Player