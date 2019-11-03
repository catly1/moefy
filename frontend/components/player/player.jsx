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
import PlaylistContainer from '../playlist/playlist_container'
import ContextMenuContainer from '../context_menu/context_menu_container'
import SearchContainer from '../search/search_container'
import LibraryContainer from '../user/library_container'
import QueueContainer from '../queue/queue_container'

class Player extends Component {
    constructor(props){
        super(props)

    }

    componentDidMount() {
        this.props.requestSongs();
        this.props.requestPlaylistSongs();
        this.props.requestLikedSongs();
    }

    componentDidUpdate(prevProps){
        if (this.props.location !== prevProps.location) {
            const div = document.getElementsByClassName("scroll-wrapper")[0]
            div.scrollTop = 0
        }
    }

    render(){
        return(<div className="player">
            <PlaylistFormContainer/>
            <LeftSiderbarContainer/>
            <div className="black-bg"></div>
            <div className="main-view">
                <div className="scroll-wrapper">
                    <Switch>
                        <Route className="player-main-view" exact path="/player/queue" component={QueueContainer} />
                        <Route className="player-main-view" exact path='/player/browse' render={() => <Redirect to={{ pathname: "/player/albums" }} />}/>
                        <Route className="player-main-view" exact path="/player/songs" component={SongIndexContainer} />
                        <Route className="player-main-view" exact path="/player/playlists/:playlistId" component={PlaylistContainer} />
                        <Route className="player-main-view" exact path="/player/albums/:albumId" component={AlbumContainer}/>
                        <Route className="player-main-view" exact path="/player/albums" component={AlbumIndexContainer} />
                        <Route className="player-main-view" exact path="/player/artists/:artistId" component={ArtistContainer} />
                        <Route className="player-main-view" exact path="/player/artists" component={ArtistIndexContainer} />
                        <Route className="player-main-view" path="/player/search" component={SearchContainer} />
                        <Route className="player-main-view" path="/player/user/:userId" component={LibraryContainer}/>
                        <Route className="player-main-view" exact path='/player/settings/account' component={() => <UserShow currentUser={this.props.currentUser} logout={this.props.logout}/>} />
                        <Route exact path='/player*' render={() => <Redirect to={{pathname: "/player/browse"}}/>} />
                    </Switch>
                </div>
            </div>
            <ContextMenuContainer/>
            <FooterPlayerContainer />
        </div>)
    }
}

export default Player