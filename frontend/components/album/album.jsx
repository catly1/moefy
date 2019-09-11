import React, { Component } from 'react';
import HeaderPlayerContainer from '../header/header_player_container';
import SongIndexItem from '../songs/song_index_item';
import { Link, Route } from 'react-router-dom';

class Album extends Component {
    constructor(props){
        super(props)
        this.state = {
            songList: []
        }
        this.handleClicks = this.handleClicks.bind(this);
    }

    componentDidMount(){
        this.props.requestAlbum(this.props.match.params.albumId)
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

    componentDidUpdate(prevProps, prevState){
        if (this.state.songList.length === 0 && this.props.songs.length > 0) {
            let filtered = this.props.songs.filter(song => this.props.album.songs.includes(song.id))
            let songList = filtered.map(song => song.id)
            let joined = this.state.songList.concat(songList)
            this.setState({ songList: joined })
        }
    }

    render(){
        const {songs, playSong, album} = this.props
        let list
        if (songs){
            let filtered = songs.filter(song => this.props.album.songs.includes(song.id))
            list = filtered.map(song => <SongIndexItem key={song.id} song={song} playSong={playSong} />)
        }
        let albumShow
        if (album){
            albumShow = (<div className="album-song-list">
                <div className="album-show-left">
                <div className="album-show-art-name-artist">
                    <div className="album-show-art">
                        <img src={album.image_url} alt={album.name} />
                    </div>
                    <div className="album-show-name">
                        <span>{album.name}</span>
                    </div>
                    <div className="album-show-artist">
                        <Link to="">{album.artist}</Link>
                    </div>
                </div>
            </div>
                <div className="album-show-right">
                    <ol onClick={this.handleClicks}>{list}
                    </ol>
                </div>
            </div>)
        }

        return (<div className="album-show">
            <div className="player-background player-background-album-show"></div>
                {albumShow}
        </div>)
    }

}

export default Album