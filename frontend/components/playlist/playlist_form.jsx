import React, { Component } from 'react';
import { MdClear } from "react-icons/md";
import { withRouter } from 'react-router-dom';


class PlaylistForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            user_id: props.currentUser.id
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
        this.props.createPlaylist(this.state).then(data => {
            this.props.history.push(`/player/playlists/${data.playlist.id}`)
            const playlistForm = document.getElementById("playlist-form");
            playlistForm.classList.remove("active");
        })
        
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

export default withRouter(PlaylistForm)