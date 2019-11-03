import React from 'react';
import { Link } from 'react-router-dom';



const Header = ({ currentUser, logout }) => {
    const notLoggedIn = () => (
        <ul className="not-logged-in">
            {/* <li><a href="">Premium</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Download</a></li> */}
            <li><Link to="/signup">Sign up</Link></li>
            <li className="divider"></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    );
    const loggedIn = () => (
        <ul className="logged-in">
            {/* <li><a href="">Premium</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Download</a></li> */}
            {/* <li className="divider"></li> */}
            <li><Link to="/player/settings/account">Profile</Link></li>
        </ul>
    );

    let display = currentUser ? loggedIn() : notLoggedIn();

    return(
        <header>
        <nav className="login-signup">
                <Link to='/'><img src="./assets/logo.png" alt="Moefy" /></Link>
            {display}
        </nav>
        </header>
    )
};


export default Header;
