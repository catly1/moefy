import React, { Component } from 'react';
import SongIndexItem from './song_index_item'
import HeaderPlayerContainer from '../header/header_player_container'

class SongIndex extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.requestSongs();
    }

    render(){
        const {songs, playSong} = this.props
        return(
            <div className="song-index">
                <HeaderPlayerContainer/>
                <div className="player-background"></div>
                <div className="song-list">
                    <ol >
                        {songs.map(song => <SongIndexItem key={song.id} song={song} playSong={playSong}/>)}
                    </ol>
                </div>
            </div>
        )
    }

}

export default SongIndex