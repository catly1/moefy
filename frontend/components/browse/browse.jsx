import React from 'react';
import { Link, Route } from 'react-router-dom';
import SongIndexContainer from '../songs/song_index_container'
import HeaderPlayerContainer from '../header/header_player_container'

const Browse = (props) =>{


    return(
        <section className="browse">
            <div className="player-background player-background-browse"></div>
            <HeaderPlayerContainer />
            <div className="browse-content">
                <div className="made-for">
                    <div className="made-for-block">
                        <h1>
                            Made for {props.currentUser.username}
                        </h1>
                        <h2>
                            Get better recommendations the more you listen.
                        </h2>
                    </div>
                    <div className="made-for-grid">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Browse

