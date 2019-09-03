import React from 'react';
import HeaderContainer from '../header/Header_container';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

const Splash = () => (
    <div>
        <HeaderContainer/>
        <section className="main">
        <div className="background-img"></div>
        <div>
            <div className="body-text">
                <h1>Moe for everyone.</h1>
                <h4>Millions of songs. Credit card needed.</h4>
                <Link to="/signup" className="splash-grn-button">Get Moefy free</Link>
            </div>
        </div>
        </section>
        <Footer/>
    </div>
);

export default Splash