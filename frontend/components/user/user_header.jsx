import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router'

class UserHeader extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        const bar = e.target.firstElementChild
    }

    handleClassName(hash) {
        const currentLocation = location.hash
        if (currentLocation === hash) {
            return "header-player-bar"
        } else return ""
    }

    addBar(bar) {
        if (bar) bar.classList.add('active')
    }

    render() {
        const {id} = this.props
        return (
            <nav className="header-player">
                <ul onClick={this.handleClick}>
                    {/* <li><Link to="/player/browse"><div className={this.handleClassName("#/player/browse")} />Featured</Link></li> */}
                    {/* <li><Link to="/player/playlists"><div className={this.handleClassName("#/player/artists")} />Playlists</Link></li> */}
                    <li><Link to={`/player/user/${id}/songs`}><div className={this.handleClassName(`#/player/user/${id}/songs`)} />Liked Songs</Link></li>
                </ul>
            </nav>
        )
    }
}

export default withRouter(UserHeader)