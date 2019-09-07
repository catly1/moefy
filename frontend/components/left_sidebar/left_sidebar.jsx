import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class LeftSidebar extends Component {

    render() {
        return (
            <section className="left-nav-bar"> 
        <div className="left-nav-wrapper">
            <div className="left-nav-logo"> 
                <Link to='/player/browse' >
                    <img src="./assets/logo.png" alt="Moefy" />
                </Link>
            </div>
            <div className="user-profile">
                <Link to='/player/settings/account'>
                    {this.props.currentUser.username}
                </Link>
            </div>
        </div>
            </section>
        )
    }
}

export default LeftSidebar