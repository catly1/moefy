import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { MdHome, MdSearch } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { GiBookshelf } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { FiArrowDownCircle } from "react-icons/fi";
import { withRouter } from 'react-router-dom';



class LeftSidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentUser: props.currentUser,
            playlists: [],
        }
        this.handlePlaylistForm = this.handlePlaylistForm.bind(this)
        this.handlePlaylist = this.handlePlaylist.bind(this)
    }


    componentDidMount(){
        this.props.currentUser.playlists.forEach(playlist => this.props.requestPlaylist(playlist.id))
    }

    handlePlaylistForm(){
        const playlistForm = document.getElementById("playlist-form")
        playlistForm.classList.add("active")
    }

    handlePlaylist(){
        if (this.state.playlists.length > 0){
            return this.props.playlists.map(playlist => <li key={playlist.id}><Link to={`/player/playlists/${playlist.id}`}>{playlist.name}</Link></li>)
        }
        // return this.props.currentUser.playlists.map(playlist => <li key={playlist.id}><Link to={`/player/playlists/${playlist.id}`}>{playlist.name}</Link></li>)
    }

    componentDidUpdate(prevProps, prevState){
        if (this.state.playlists.length === 0 && this.props.playlists.length > 0){
            const playlists = this.props.playlists
            this.setState({ playlists: playlists })
        }
    }
    
    render() {
        return (
            <section className="left-nav-bar"> 
        <div className="left-nav-wrapper">
            <div className="left-nav-logo"> 
                <Link to='/player/browse' >
                    <img src="./assets/logo.png" alt="Moefy" />
                </Link>
            </div>

            <nav className="sidebar-main-nav">
                <Link className="left-nav-bar-items" to='/player/browse' >
                    <MdHome/><div>Home</div>
                </Link>
                <Link className="left-nav-bar-items" to='/player/search' >
                    <MdSearch/><div>Search</div>
                </Link>
                <Link className="left-nav-bar-items" to={`/player/user/${this.props.currentUser.id}/songs`} >
                    <GiBookshelf/><div>Library</div>
                </Link>
            </nav>
            <h2 className="sidebar-playlist-header">Playlists</h2>
            <button className="create-playlist-button" onClick={this.handlePlaylistForm}>
                <FaPlus/>
                <span>Create Playlist</span>
            </button>
            <div className="sidebar-playlist-list-wrapper">
                <ul className="sidebar-playlist-list">
                    {this.handlePlaylist()}
                </ul>
            </div>
            <div className="sidebar-bottom">
                <Link className="left-nav-bar-items sidebar-bottom-download" to='/player/browse' >
                    {/* <FiArrowDownCircle/><div>Install App</div> */}
                </Link>
                <div className="user-profile">
                    <Link className="left-nav-bar-items sidebar-bottom-download" to='/player/settings/account'>
                        <GoPerson/><div>{this.props.currentUser.username}</div>
                    </Link>
                </div>
            </div>
        </div>
            </section>
        )
    }
}

export default LeftSidebar