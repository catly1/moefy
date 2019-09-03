import React from 'react';

const Footer = () => (
    <footer>
        <nav className="about">
            <img src="./assets/logo.png" alt="Moefy" />
            <dl>
                <dt>Company</dt>
                <dd><a href="">About</a></dd>
                <dd><a href="">Jobs</a></dd>
                <dd><a href="">For the Record</a></dd>
            </dl>
            <dl>
                <dt>Communities</dt>
                <dd><a href="">For Artists</a></dd>
                <dd><a href="">Developers</a></dd>
                <dd><a href="">Brands</a></dd>
                <dd><a href="">Investors</a></dd>
                <dd><a href="">Vendors</a></dd>
            </dl>
            <dl>
                <dt>Useful Links</dt>
                <dd><a href="">Help</a></dd>
                <dd><a href="">Web Player</a></dd>
                <dd><a href="">Free Mobile App</a></dd>
            </dl>
            <div>
                <ul>
                    <li><a href="https://instagram.com/"><img src="" alt="instagram"/></a></li>
                    <li><a href="https://twitter.com/"><img src="" alt="twitter"/></a></li>
                    <li><a href="https://www.facebook.com/Spotify"><img src="" alt="facebook"/></a></li> 
                </ul>
            </div>
        </nav>
    </footer>
);

export default Footer