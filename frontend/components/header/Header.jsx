import React from 'react';
import { Link } from 'react-router-dom';



const Header = ({ currentUser, logout }) => {
    const notLoggedIn = () => (
        <ul>
            <li><a href="">Premium</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Download</a></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
        </ul>
    );
    const loggedIn = () => (
        <ul>
            <li><a href="">Premium</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Download</a></li>
            <li><a href="">Profile</a></li>
        </ul>
    );

    let display = currentUser ? loggedIn() : notLoggedIn();

    return(
        <header>
        <nav className="login-signup">
        <img src="./assets/logo.png" alt="Moefy"/>
            {display}
        </nav>
        </header>
    )
};


export default Header;
