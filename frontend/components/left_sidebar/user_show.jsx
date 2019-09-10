import React, { Component } from 'react';
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';

class UserShow extends Component {
    render(){
        return(
            <div className="player-main-view">
                <div className="player-background player-background-user-profile"></div>
                <div className="user-profile-page">
                    <div className="profile-name-pic">
                        <GoPerson />
                        <div>{this.props.currentUser.username}</div>
                    </div>
                    <ul>
                        <button className="splash-grn-button profile-button"><Link to="/player/settings/account">View account</Link></button>
                        <button className="splash-grn-button profile-button"><Link to="/">Full website</Link></button>
                        <button className="splash-grn-button profile-button"><Link to="/player/settings/account">Help</Link></button>
                        <button onClick={this.props.logout} className="splash-grn-button profile-button">Logout</button>
                    </ul>
                </div>
            </div>
        )
    }
}

export default UserShow