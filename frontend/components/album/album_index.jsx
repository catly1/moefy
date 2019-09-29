import React, { Component } from 'react';
import HeaderPlayerContainer from '../header/header_player_container';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends Component {
    constructor(props){
        super(props)
    }


    componentDidMount() {
        this.props.requestAlbums();

    }

    render() {
        const { albums } = this.props

        return (
            <div className="album-index player-main-view">
                <div className="player-background player-background-album-index-low"></div>
                <div className="player-background player-background-album-index"></div>
                <HeaderPlayerContainer />
                <div className="album-list-wrapper">
                    <ul className="album-list" onClick={this.handleClicks}>
                        {albums.map(album => <AlbumIndexItem key={album.id} album={album} />)}
                    </ul>
                </div>
            </div>
        )
    }


}

export default AlbumIndex