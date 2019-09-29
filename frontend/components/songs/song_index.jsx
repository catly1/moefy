import React, { Component } from 'react';
import SongIndexItem from './song_index_item_container'
import HeaderPlayerContainer from '../header/header_player_container'

class SongIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            songList: []
        };
        this.handleClicks = this.handleClicks.bind(this);
    }

    // componentDidMount() {
    //     this.props.requestSongs();

    // }

    componentDidUpdate(){
        if (this.state.songList.length === 0 && this.props.songs.length > 0) {
            let songList = this.props.songs.map(song => song.id)
            let joined = this.state.songList.concat(songList)
            this.setState({ songList: joined })
        }
    }

    handleClicks(e){
        let pickedSongId = e.target.closest("li").id
        let queue = this.queueConstructor(pickedSongId)
        this.props.playQueue(queue)
    }
    
    queueConstructor(songId){
        let songList = this.state.songList
        let index = songList.indexOf(parseInt(songId))
        return songList.slice(index)
    }
    
    render(){
        const {songs, playSong} = this.props

        return(
            <div className="song-index player-main-view">
                <div className="player-background player-background-song-index-low"></div>
                <div className="player-background player-background-song-index"></div>
                <HeaderPlayerContainer/>
                <div className="song-list">
                    <ol onClick={this.handleClicks}>{songs.map(song =><SongIndexItem key={song.id} song={song} playSong={playSong}/>)}
                    </ol>
                </div>
            </div>
        )
    }

}

export default SongIndex