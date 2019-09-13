import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class AlbumIndexItem extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {album} = this.props

        return(
            <li className="album-index-item">
                <div className="album-index-item-container draggabletest">
                    <div className="album-index-art-name">
                        <div className="album-index-art"><Link to={`/player/albums/${album.id}`}><img src={album.image_url} alt={album.name}/></Link></div>
                        <div className="album-index-name"><Link to={`/player/albums/${album.id}`}>{album.name}</Link></div>
                    </div>
                    <div className="album-index-artist"><Link to={`/player/artists/${album.artist_id}`}>{album.artist}</Link></div>
                </div>
            </li>
        )
    }


}

export default AlbumIndexItem