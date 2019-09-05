import React from 'react';
import { Link, Route } from 'react-router-dom';
import SongIndexContainer from '../songs/song_index_container'
import HeaderPlayerContainer from '../header/header_player_container'

const Browse = (props) =>{


    return(
        <section className="browse">
            <div className="player-background player-background-browse"></div>
            <HeaderPlayerContainer />
        </section>
    )
}

export default Browse

