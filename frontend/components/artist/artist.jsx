import React, { Component } from 'react';
import SongIndexItem from '../songs/song_index_item';
import AlbumIndexItem from '../album/album_index_item';
import { Link, Route } from 'react-router-dom';

class Artist extends Component{
    constructor(props){
        super(props)
        this.state = {
            songList: []
        }
        this.handleClicks = this.handleClicks.bind(this)
        this.constructArtistShow = this.constructArtistShow.bind(this)
        this.handlePlayButton = this.handlePlayButton.bind(this)
    }


    componentDidMount() {
        this.props.requestArtist(this.props.match.params.artistId)
    }

    handlePlayButton() {
        let firstSongId = document.getElementById("artist-show-songs").firstChild.id
        let queue = this.queueConstructor(firstSongId)
        this.props.playQueue(queue)
    }


    handleClicks(e) {
        let pickedSongId = e.target.closest("li").id
        let queue = this.queueConstructor(pickedSongId)
        this.props.playQueue(queue)
    }

    queueConstructor(songId) {
        let songList = this.state.songList
        let index = songList.indexOf(parseInt(songId))
        return songList.slice(index)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.artist != this.props.artist && !this.props.artist) {
            debugger
            this.props.requestArtist(this.props.match.params.artistId)
        }
        

        if (this.state.songList.length === 0 && this.props.songs.length > 0) {
            let filtered = this.props.songs.filter(song => this.props.artist.songs.includes(song.id))
            let songList = filtered.map(song => song.id)
            let joined = this.state.songList.concat(songList)
            this.setState({ songList: joined })
        }
    }

    constructArtistShow(){
        const {songs, artist} = this.props
        let artistSongs
        if (songs, artist) {
            let filtered = songs.filter(song => artist.songs.includes(song.id))
            artistSongs = filtered.map(song => <SongIndexItem key={song.id} song={song}/>)
        }


        let artistShow
        if (artist) {
            artistShow = (<div className="artist-show-img-header">
                <img src={artist.image_url} alt={artist.name} />
                <div className="artist-show-name"><div>{artist.name}</div>
                    <button className="splash-grn-button artist-show-play-button noSelect" onClick={this.handlePlayButton}>Play</button>
                    <nav className="artist-show-nav"><li>Overview</li></nav>
                </div>
                <div className="artist-show-content">
                    <div className="artist-show-songs">
                        <h2>Tracks</h2>
                        <ol onClick={this.handleClicks} id="artist-show-songs">
                            {artistSongs}
                        </ol>
                    </div>
                    <div className="artist-show-albums">
                        <h2>Albums</h2>
                        <ul className="album-list-wrapper artist-show-albums">
                        {this.props.artist.albums.map(album => <AlbumIndexItem key={album.id} album={album} />)}
                        </ul>
                    </div>
                </div>
            </div>)
        }



        return(<div className="artist-show">
            {artistShow}
        </div>)
    }

    render(){
        return <div className="artist-show-wrapper">
        <div className="player-background player-background-artist-show"></div>
        {this.constructArtistShow()}
        </div>
    }
}

export default Artist