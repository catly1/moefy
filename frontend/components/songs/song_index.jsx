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
        const {songs} = this.props
        return(
            <div className="song-index">
                <HeaderPlayerContainer/>
                <div className="song-index-background"></div>
                <div className="song-list">
                    <ol>
                        {songs.map(song => <SongIndexItem key={song.id} song={song}/>)}
                    </ol>
                </div>
            </div>
        )
    }

}

export default SongIndex