import React from 'react';
import HeaderContainer from '../header/Header_container'
import Footer from '../footer/footer'

const Splash = () => (
    <div>
        <HeaderContainer/>
        <div class="background"></div>
        <div>
            <div className="something">
                <h1>Moe for everyone</h1>
                <h4>Millions of songs. Credit card needed.</h4>
                <button>Get Moefy free</button>
            </div>
        </div>
        <Footer/>
    </div>
);

export default Splash