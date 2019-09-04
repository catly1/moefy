import React from 'react';
import { Link, Route } from 'react-router-dom';
import SongIndexContainer from '../songs/song_index_container'

const Browse = (props) =>{


    return(
        <section className="browse">
            {/* <nav>
                <ul>
                    <li><Link to="/player/songs">Songs</Link></li>
                </ul>
            </nav> */}
            <Route exact path="/player/songs" component={SongIndexContainer}/>
        </section>
    )
}

export default Browse

