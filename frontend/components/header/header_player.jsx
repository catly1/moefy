import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class HeaderPlayer extends Component {
    render(){
        return(
        <nav className="header-player">
            <ul>
                <li><Link to="/player/songs">Songs</Link></li>
            </ul>
        </nav>
        )
    }
}

export default HeaderPlayer