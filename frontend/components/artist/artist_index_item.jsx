import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class ArtistIndexItem extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        const { artist } = this.props

        return (
            <li className="artist-index-item">
                <div className="artist-index-item-container draggabletest">
                    <div className="artist-index-art-name">
                        <div className="artist-index-art"><Link to={`/player/artists/${artist.id}`}><img src={artist.image_url} alt={artist.name} /></Link></div>
                        <div className="artist-index-name"><Link to={`/player/artists/${artist.id}`}>{artist.name}</Link></div>
                    </div>
                </div>
            </li>
        )
    }

}

export default ArtistIndexItem