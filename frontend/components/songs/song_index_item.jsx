import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class SongIndexItem extends Component {
    constructor(props){
        super(props)
        this.handleDoubleClick = this.handleDoubleClick.bind(this)
    }


    handleDoubleClick(e) {
        this.props.playSong(this.props.song.id)
    }

    render(){
        const {song} = this.props
        const artists = song.artists.map(artist => 
            <Link key={artist.id} to="">{artist.name}</Link>
        )
        return(
            <li onDoubleClick={this.handleDoubleClick}>
                <span className="song-item">
                    <div className="song-first-line">
                            <div className="song-name">{song.name}</div>
                            <div className="song-name">5:00</div>
                    </div>

                    <div className="song-second-line">
                        {artists}
                        <Link to="">{song.album}</Link>
                    </div>
                </span>
            </li>
        )
    }
}

export default SongIndexItem