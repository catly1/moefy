import React, { Component } from 'react';
import SongIndexItem from './song_index_item'

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
                <div className="song-index-background"></div>
                <div className="song-list">
                    <ul>
                        {songs.map(song => <SongIndexItem key={song.id} song={song}/>)}
                    </ul>
                </div>
            </div>
        )
    }

}

export default SongIndex