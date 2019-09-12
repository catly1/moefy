import React, { Component } from 'react';
import HeaderPlayerContainer from '../header/header_player_container';
import ArtistIndexItem from '../artist/artist_index_item';

class ArtistsIndex extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.requestArtists();

    }

    render(){
        const { artists } = this.props

        return (
            <div className="artist-index player-main-view">
                <div className="player-background player-background-artist-index"></div>
                <HeaderPlayerContainer />
                <div className="artist-list-wrapper">
                    <ul className="artist-list" onClick={this.handleClicks}>
                        {artists.map(artist => <ArtistIndexItem key={artist.id} artist={artist} />)}
                    </ul>
                </div>
            </div>
        )
    }

}

export default ArtistsIndex