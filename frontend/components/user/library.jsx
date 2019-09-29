import React, { Component } from 'react';
import UserHeader from './user_header'
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import UserSongIndexContainer from './user_song_index_container';

class Library extends Component {
    render(){
        const { id } = this.props.currentUser
        return <div>
            <div className="player-background player-background-library-low"></div>
            <div className="player-background player-background-library"></div>
            <UserHeader id={id}/>
            <Switch>
                <Route path={`/player/user/${id}/songs`} component={UserSongIndexContainer}/>
            </Switch>
        </div>
    }
}

export default Library