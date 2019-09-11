import React, { Component } from 'react';
import HeaderPlayerContainer from '../header/header_player_container'
import SongIndexItem from '../songs/song_index_item'

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
        let songList = this.props.songs.map(song => song.id)
        let joined = this.state.songList.concat(songList)
        this.setState({ songList: joined })
        let songLists = this.state.songList
        let index = songLists.indexOf(parseInt(songId))
        return songList.slice(index)
    }

    componentDidUpdate(prevProps, prevState){



        if (!this.props.songs.length) {
        this.props.album.songs.forEach(song => this.props.requestSong(song))

        }


    }

    render(){
        const {songs, playSong} = this.props
        let list
        if (songs){
            list = songs.map(song => <SongIndexItem key={song.id} song={song} playSong={playSong} />)
        }

        return (<div className="album-show">
            <div className="player-background player-background-album-show"></div>
            <div className="album-song-list">
                <div className="album-show-left"></div>
                <div className="album-show-right">
                    <ol onClick={this.handleClicks}>{list}
                    </ol>
                </div>
            </div>
        </div>)
    }

}

export default Album