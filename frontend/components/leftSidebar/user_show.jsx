import React, { Component } from 'react';

class UserShow extends Component {
    render(){
        return(
            <div>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        )
    }
}

export default UserShow