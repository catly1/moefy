import React, { Component } from 'react';
import { Link, Route, Switch, Redirect  } from 'react-router-dom';
import FooterPlayerContainer from '../footer/footer_player_container';
import BrowseContainer from '../browse/browse_container';
import SongIndexContainer from '../songs/song_index_container';
import LeftSiderbarContainer from '../left_sidebar/left_sidebar_container';
import AlbumIndexContainer from '../album/album_index_container';
import AlbumContainer from '../album/album_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import ArtistContainer from '../artist/artist_container';
import UserShow from '../left_sidebar/user_show';
import PlaylistFormContainer from '../playlist/playlist_form_container';

class Player extends Component {
    constructor(props){
        super(props)

    }

    componentDidMount() {
        this.props.requestSongs();

    }

    render(){
        return(<div className="player">
            <PlaylistFormContainer currentUser={this.props.currentUser}/>
            <LeftSiderbarContainer currentUser={this.props.currentUser}/>

            <div className="main-view">
                <div className="scroll-wrapper">
                    <Switch>
                        <Route className="player-main-view" exact path='/player/browse' component={() => <BrowseContainer currentUser={this.props.currentUser}/>}/>
                        <Route className="player-main-view" exact path="/player/songs" component={SongIndexContainer} />
                        <Route className="player-main-view" exact path="/player/albums/:albumId" component={AlbumContainer}/>
                        <Route className="player-main-view" exact path="/player/albums" component={AlbumIndexContainer} />
                        <Route className="player-main-view" exact path="/player/artists/:artistId" component={ArtistContainer} />
                        <Route className="player-main-view" exact path="/player/artists" component={ArtistIndexContainer} />
                        <Route className="player-main-view" exact path='/player/settings/account' component={() => <UserShow currentUser={this.props.currentUser} logout={this.props.logout}/>} />
                        <Route exact path='/player*' render={() => <Redirect to={{pathname: "/player/browse"}}/>} />
                    </Switch>
                </div>
            </div>

            <FooterPlayerContainer />
        </div>)
    }
}

export default Player