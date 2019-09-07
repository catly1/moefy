import React from 'react';
import HeaderContainer from '../header/header_container.js';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

const Splash = ({ currentUser }) => {

    const notLoggedIn = () =>(
        <section className="main">
            <div className="background-img background-img-notlogged"></div>
            <div className="body-text">
                <div>
                    <h1>Moe for everyone.</h1>
                    <h4>Millions of songs. Credit card needed.</h4>
                    <Link to="/signup" className="splash-grn-button">Get Moefy free</Link>
                </div>
            </div>
        </section>
    );
    const loggedIn = () =>(
        <section className="main">
            <div className="background-img background-img-logged"></div>
            <div className="body-text loggedin">
                <div>
                    <h1>Jump back in</h1>
                    <Link to="/player/browse" className="splash-grn-button">Open Web Player</Link>
                </div>
            </div>
        </section> 
    );

    let display = currentUser ? loggedIn() : notLoggedIn();
    return(
    <div className="splash">
        <HeaderContainer/>
        {display}
        <Footer/>
    </div>
    )
};

export default Splash