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
        this.handleContextMenu = this.handleContextMenu.bind(this);
        // this.handleDeleteConfirmation = this.handleDeleteConfirmation.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleContextMenu, false);
    }

    handleContextMenu(e) {
        e.stopPropagation();
        if (this.node.contains(e.target)) {
            const left = e.pageX
            const top = e.pageY
            const playlistMenu = document.querySelector(".playlist-menu")
            playlistMenu.style.left = `${left}px`
            playlistMenu.style.top = `${top}px`
            playlistMenu.classList.add("active")
            return;
        }
        this.handleClickOutside(e);
    }

    handleClickOutside(e) {
        if (!Array.from(e.target.classList).includes("playlist-menu-item")) {
            const playlistMenu = document.querySelector(".playlist-menu")
            playlistMenu.classList.remove("active")
        }
    }

    handleAddToPlaylist(){

    }

    handleDoubleClick(e) {
        // this.props.playSong(this.props.song.id)
    }

    stopPropagation(e){
        e.stopPropagation();
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
            <Link key={artist.id} to={`/player/artists/${artist.id}`} onClick={this.stopPropagation}>{artist.name}</Link>
        )
        return(
            <li onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} id={song.id}>
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
                        <Link to={`/player/albums/${song.album_id}`} onClick={this.stopPropagation}>{song.album}</Link>
                    </div>
                </section>
                <section className="song-item-song-options">
                    <div onClick={this.handleContextMenu} ref={node => this.node = node}>...</div>
                </section>
                <section className="song-item-song-length">
                    <div>{song.duration}</div>
                </section>
            </li>
        )
    }
}

export default SongIndexItem