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
        if (this.props.match.params.playlistId) this.props.requestPlaylist(this.props.match.params.playlistId)
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
        // if (prevProps.playlistSongs.length != this.props.playlistSongs.length && this.props.playlist){
        //     this.props.requestPlaylist(this.props.match.params.playlistId) 
        //     const filtered = this.props.playlistSongs.filter(playlist_song => playlist_song.playlist_id === this.props.playlist.id) 
        //     let songList = filtered.map(song => song.id)
        //     this.setState({ songList: songList })  
        // }

        // if (this.props.playlistSongs && this.props.playlistSongs.length != prevProps.playlistSongs.length && this.props.playlist && this.props.songs){
        //     const song_ids = this.props.playlist.playlist_song_song_ids
        //     const playlist_song_ids = this.props.playlist.playlist_song_song_ids
        //     const filtered = this.props.songs.filter(song => song_ids.includes(song.id))
        //     this.setState({ songList: filtered})
        // }

        if (this.state.songList && this.props.playlistSongs && this.state.songList.length > this.props.playlistSongs.length){
            if (this.props.playlistSongs.length === 0){
                return this.setState({ songList: [] })
            }
        }




        if (this.props.playlistSongs.length > 0 && this.props.playlist){
            const filtered2 = this.props.playlistSongs.filter(playlist_song => playlist_song.playlist_id === this.props.playlist.id)
            
            let songList2 = filtered2.map(song => song.song_id)
            let noMatch = !this.state.songList.every(e => songList2.includes(e))
            if (noMatch) {
                return this.setState({ songList: songList2 })
            }


            if (filtered2.length > 0 && songList2 && this.state.songList.length != songList2.length){
                return this.setState({ songList: songList2 })  
            }


        }
        if (this.state.songList.length === 0 && this.props.songs.length > 0 && prevState.songList.length != this.state.songList.length) {
            if (this.props.playlist && this.props.playlist.songs.length > 0) {
                let filtered3 = this.props.playlistSongs.filter(playlist_song => playlist_song.playlist_id === this.props.playlist.id)
                let songList3 = filtered3.map(song => song.song_id)
                this.setState({ songList: songList3 })
            }
        }
    }


    handleContextMenu(e){
        if (this.node && this.node.contains(e.target)) {
            const left = e.pageX
            const top = e.pageY
            const playlistMenu = document.querySelector(".playlist-menu-show")
            playlistMenu.style.left = `${left}px`
            playlistMenu.style.top = `${top}px`
            playlistMenu.classList.add("active")
            return;
        }
        this.handleClickOutside(e);
    }

    handleClickOutside(e){
        if (!Array.from(e.target.classList).includes("playlist-menu-item")){
        const playlistMenu = document.querySelector(".playlist-menu-show") 
        if(playlistMenu) playlistMenu.classList.remove("active")
        }
    }

    handleDeleteConfirmation(){
        const playlistDeleteForm = document.getElementById("playlist-delete-form")
        playlistDeleteForm.classList.add("active")
    }

    constructPlaylistShow() {
        const { songs, playSong, playlist, playlistSongs } = this.props
        let list
        if (playlist && songs && playlistSongs) {
            let filtered = songs.filter(song => this.state.songList.includes(song.id))
            list = filtered.map(song => <SongIndexItem key={song.id} song={song} playSong={playSong} />)
        }

        let numberOfSongs
        if (playlist && playlist.songs) {
            let num = list.length

            numberOfSongs = this.state.songList.length === 1 ? `${num} song` : `${num} songs`
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
            <nav className="playlist-menu-show">
                <div className="playlist-menu-item" onClick={this.handleDeleteConfirmation}>Delete</div>
            </nav>
        </div>
    }

}

export default Playlist