import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';
import { withRouter } from 'react-router'

class HeaderPlayer extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){
        const bar = e.target.firstElementChild
    }

    handleClassName(hash){
        const currentLocation = location.hash
        if (currentLocation === hash) {
            return "header-player-bar"
        } else return ""
    }

    addBar(bar){
        if (bar) bar.classList.add('active')
    }

    render(){
        return(
        <nav className="header-player">
            <ul onClick={this.handleClick}>
                {/* <li><Link to="/player/browse"><div className={this.handleClassName("#/player/browse")} />Featured</Link></li> */}
                <li><Link to="/player/albums"><div className={this.handleClassName("#/player/albums")}/>Albums</Link></li>
                <li><Link to="/player/songs"><div className={this.handleClassName("#/player/songs")}/>Songs</Link></li>
                <li><Link to="/player/artists"><div className={this.handleClassName("#/player/artists")} />Artists</Link></li>
            </ul>
        </nav>
        )
    }
}

export default withRouter(HeaderPlayer)