import React, { Component } from 'react';
import { MdClear } from "react-icons/md";
import { withRouter } from 'react-router-dom';

class PlaylistDelete extends Component {
    constructor(props){
        super(props)

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleClose() {
        const playlistForm = document.getElementById("playlist-delete-form");
        playlistForm.classList.remove("active");
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.deletePlaylist(this.props.playlistId).then(() => {
            this.props.history.push(`/player/browse`)
        })
    }


    render() {
        return (
            <div className="dialog" id="playlist-delete-form">
                <form className="playlist-form">
                    <button className="cross-button" onClick={this.handleClose}><MdClear /></button>
                    <h4 className="playlist-label">Do you really want to delete this playlist?</h4>
                    <div className="playlist-form-buttons">
                        <div className="playlist-form-button">
                            <button className="splash-grn-button cancel-button" onClick={this.handleClose}>CANCEL</button>
                        </div>
                        <div className="playlist-form-button">
                            <button className="splash-grn-button create-button" onClick={this.handleSubmit}>DELETE</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(PlaylistDelete)