import React, { Component } from 'react';
import HeaderPlayerContainer from '../header/header_player_container';
import SongIndexItem from '../songs/song_index_item';
import { Link, Route } from 'react-router-dom';
import PlaylistDelete from '../playlist/playlist_delete_container';

class Playlist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            songList: []
        }
        this.handleClicks = this.handleClicks.bind(this);
        this.handlePlayButton = this.handlePlayButton.bind(this);
        this.constructPlaylistShow = this.constructPlaylistShow.bind(this);
        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.handleDeleteConfirmation = this.handleDeleteConfirmation.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        this.props.requestPlaylist(this.props.match.params.playlistId)
        document.addEventListener('mousedown', this.handleContextMenu, false);
    }


    handleClicks(e) {
        let pickedSongId = e.target.closest("li").id
        let queue = this.queueConstructor(pickedSongId)
        this.props.playQueue(queue)
    }


    handlePlayButton() {
        let firstSongId = document.getElementById("playlist-show-songs").firstChild.id
        let queue = this.queueConstructor(firstSongId)
        this.props.playQueue(queue)
    }

    queueConstructor(songId) {
        let songList = this.state.songList
        let index = songList.indexOf(parseInt(songId))
        return songList.slice(index)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.playlist != this.props.playlist && !this.props.playlist) {
            this.props.requestPlaylist(this.props.match.params.playlistId)
        }
        
        if (this.state.songList.length === 0 && this.props.songs.length > 0) {
            if (this.props.playlist && this.props.playlist.songs.length > 0) {
                let filtered = this.props.songs.filter(song => this.props.playlist.songs.includes(song.id))
                let songList = filtered.map(song => song.id)
                let joined = this.state.songList.concat(songList)
                this.setState({ songList: joined })
            }
        }
    }


    handleContextMenu(e){
        if (this.node.contains(e.target)) {
            const left = e.pageX
            const top = e.pageY
            const playlistMenu = document.querySelector(".playlist-menu")
            playlistMenu.style.left = `${left}px`
            playlistMenu.style.top = `${top}px`
            playlistMenu.classList.add("active")
            return;
        }
        this.handleClickOutside(e);
    }

    handleClickOutside(e){
        if (!Array.from(e.target.classList).includes("playlist-menu-item")){
        const playlistMenu = document.querySelector(".playlist-menu") 
        playlistMenu.classList.remove("active")
        }
    }

    handleDeleteConfirmation(){
        const playlistDeleteForm = document.getElementById("playlist-delete-form")
        playlistDeleteForm.classList.add("active")
    }

    constructPlaylistShow() {
        const { songs, playSong, playlist } = this.props
        let list
        if (playlist && songs) {
            let filtered = songs.filter(song => playlist.songs.includes(song.id))
            list = filtered.map(song => <SongIndexItem key={song.id} song={song} playSong={playSong} />)
        }

        let numberOfSongs
        if (playlist && playlist.songs) {
            let num = playlist.songs.length
            numberOfSongs = playlist.songs.length === 1 ? `${num} song` : `${num} songs`
        }

        let playlistShow
        if (playlist) {
            playlistShow = (<div className="playlist-song-list">
                <div className="playlist-show-left">
                    <div className="playlist-show-art-name-artist">
                        <div className="playlist-show-art">
                            <img src="./assets/album/default.png" alt={playlist.name} />
                        </div>
                        <div className="playlist-show-name">
                            <span>{playlist.name}</span>
                        </div>
                        <div className="playlist-show-artist">
                            <Link to="">{playlist.owner_name}</Link>
                        </div>
                        <div className="playlist-show-play-button-wrapper"><button className="splash-grn-button noSelect" onClick={this.handlePlayButton}>Play</button></div>
                        <div className="playlist-show-year">
                            {numberOfSongs}
                        </div>
                        <section className="playlist-options">
                            <div onClick={this.handleContextMenu} ref={node => this.node = node}>...</div>

                        </section>
                    </div>
                </div>
                <div className="playlist-show-right">
                    <ol onClick={this.handleClicks} id="playlist-show-songs">
                        {list}
                    </ol>
                </div>
            </div>)
        }

        return (<div className="playlist-show">
            <div className="player-background player-background-playlist-show"></div>
            {playlistShow}
        </div>)
    }

    render() {
        let playlistId
        if (this.props.playlist) {
            playlistId = this.props.playlist.id
        }

        return <div>
        {this.constructPlaylistShow()}
        <PlaylistDelete playlistId={playlistId}/>
            <nav className="playlist-menu">
                <div className="playlist-menu-item" onClick={this.handleDeleteConfirmation}>Delete</div>
            </nav>
        </div>
    }

}

export default Playlist