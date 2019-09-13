import React, { Component } from 'react';

class ContextMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            playlists: []
        }
        this.renderContextMenu = this.renderContextMenu.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd(e){
        let playerAdd = document.querySelector(".song-info-details-first-line").id
        debugger
    }

    componentDidMount() {
        this.props.currentUser.playlists.forEach(playlist => this.props.requestPlaylist(playlist.id))
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.playlists.length === 0 && this.props.playlists.length > 0) {
            const playlists = this.props.playlists
            this.setState({ playlists: playlists })
        }
    }

    renderContextMenu() {
        if (this.state.playlists.length > 0) {
            return this.props.playlists.map(playlist => <span onClick={this.handleAdd} key = { playlist.id } className = "playlist-menu-item" > { playlist.name }</span >)
        }

        // let playlist
        // if (this.props.currentUser) playlist = this.props.currentUser.playlists.map(playlist => <span key={playlist.id} className="playlist-menu-item">{playlist.name}</span>)
        // return playlist
    }

    render(){
        return(
            <nav className="playlist-menu">
                <span className="plaspanst-menu-item" onClick={this.handle}>Add to Playlist:</span>
                {this.renderContextMenu()}
            </nav>
        )
    }
}

export default ContextMenu