import React from 'react';

const Footer = () => (
    <footer>
        <nav className="about">
            <div className="bottom-logo">
                <a href=""><img src="./assets/logo.png" alt="Moefy" /></a>
            </div>
            <div className="footer-top-links">
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
            </div>
            <div className="social-media">
                <ul>
                    <li><a href="https://instagram.com/"><img src="./assets/insta.png" alt="instagram"/></a></li>
                    <li><a href="https://twitter.com/"><img src="./assets/twitter.png" alt="twitter"/></a></li>
                    <li><a href="https://www.facebook.com/Spotify"><img src="./assets/fb.png" alt="facebook"/></a></li> 
                </ul>
            </div>
        </nav>
        <div className="country">
            <a href="">USA
            <img src="https://masthead.scdn.co/29c1b3e4c97482ddf9ddaabdb3bcf977/flags/us.svg" alt=""></img>
            </a>
        </div>
        <nav className="bottom-links">
            <ul>
                <li><a href="">Legal</a></li>
                <li><a href="">Privacy Center</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Cookies</a></li>
                <li><a href="">About Ads</a></li>
            </ul>
            <a>© Moefy</a>
        </nav>
    </footer>
);

export default Footer