import React, { Component } from 'react';
import { MdClear } from "react-icons/md";


class PlaylistForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            user_id: ""
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClose(){
        const playlistForm = document.getElementById("playlist-form");
        playlistForm.classList.remove("active");
    }

    handleSubmit(e){
        e.preventDefault();
        const playlist = Object.assign({}, this.state, {
            user_id: this.props.currentUser.id
        })
        this.props.createPlaylist(playlist).then(data => this.props.history.push(`/player/playlist/${data.playlist.id}`))
    }

    update(){
        return e => this.setState({ name: e.target.value })
    }

    render(){
        return(
            <div className="dialog" id="playlist-form">
                <form className="playlist-form">
                    <button className="cross-button" onClick={this.handleClose}><MdClear/></button>
                    <h4 className="playlist-label">Playlist Name</h4>
                    <div className="playlist-input-span">
                        <div className="playlist-input-box">
                            <div className="playlist-content-spacing">
                                <h4 className="playlist-input-label">Playlist Name</h4>
                                <input className="playlist-input" type="text" value={this.state.name} onChange={this.update()} placeholder="New Playlist"/>
                            </div>
                        </div>
                    </div>
                    <div className="playlist-form-buttons">
                        <div className="playlist-form-button">
                            <button className="splash-grn-button cancel-button" onClick={this.handleClose}>CANCEL</button>
                        </div>
                        <div className="playlist-form-button">
                            <button className="splash-grn-button create-button" onClick={this.handleSubmit}>CREATE</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default PlaylistForm