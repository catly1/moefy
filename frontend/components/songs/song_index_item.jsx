import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { MdMusicNote, MdPlayArrow } from "react-icons/md";

class SongIndexItem extends Component {
    constructor(props){
        super(props)
        this.handleDoubleClick = this.handleDoubleClick.bind(this)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.state = {
            note: <MdMusicNote />
        }
    }


    handleDoubleClick(e) {
        // this.props.playSong(this.props.song.id)
    }

    handleMouseEnter(e){
        this.setState({ note: <MdPlayArrow onClick={this.handleDoubleClick}/>})
    }

    handleMouseLeave(e){
        this.setState({ note: <MdMusicNote /> })
    }

    render(){
        const {song} = this.props
        const artists = song.artists.map(artist => 
            <Link key={artist.id} to={`/player/artists/${artist.id}`}>{artist.name}</Link>
        )
        return(
            <li onDoubleClick={this.handleDoubleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} id={song.id}>
                <section className="song-item-play-button">
                    <div>{this.state.note}</div>
                </section>
                <section className="song-item">
                    <div className="song-first-line">
                            <div className="song-name">{song.name}</div>
                    </div>
                    <div className="song-second-line">
                        {artists}
                        <div className="song-second-line-dot">.</div>
                        <Link to={`/player/albums/${song.album_id}`}>{song.album}</Link>
                    </div>
                </section>
                <section className="song-item-song-options">
                    <div>...</div>
                </section>
                <section className="song-item-song-length">
                    <div>{song.duration}</div>
                </section>
            </li>
        )
    }
}

export default SongIndexItem