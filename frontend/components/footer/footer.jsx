import React from 'react';
import { FaGithub, FaLinkedinIn, FaAngellist } from "react-icons/fa";

const Footer = () => (
    <footer>
        <nav className="about">
            <div className="bottom-logo">
                <a href=""><img src="./assets/logo.png" alt="Moefy" /></a>
            </div>
            <div className="footer-top-links">
                <dl>
                    <dt>Other Projects</dt>
                    <dd><a href="https://amazonforest.herokuapp.com/">Amazon Forest</a></dd>
                    <dd><a href="https://dueme.herokuapp.com/">DueMe</a></dd>
                    <dd><a href="https://twintales.herokuapp.com/">Twin Tales!</a></dd>
                </dl>
                <dl>
                    <dt>Technologies</dt>
                    <dd><a href="https://rubyonrails.org/">Rails</a></dd>
                    <dd><a href="https://reactjs.org/">React</a></dd>
                    <dd><a href="https://aws.amazon.com/s3/">AWS S3</a></dd>
                    <dd><a href="https://www.postgresql.org/">PostgreSQL</a></dd>
                    <dd><a href="https://github.com/CookPete/react-player">react-player</a></dd>
                </dl>
                <dl>
                    <dt>Useful Links</dt>
                    <dd><a href="https://www.appacademy.io/">App Academy</a></dd>
                    <dd><a href="https://www.spotify.com/us/">Spotify</a></dd>
                </dl>
            </div>
            <div className="social-media">
                <ul>
                    <li><a href="https://github.com/catly1/moefy"><FaGithub/></a></li>
                    <li><a href="https://www.linkedin.com/in/carlos-jacob-catly-8a46a0166"><FaLinkedinIn /></a></li>
                    <li><a href="https://angel.co/carlos-jacob-a-catly"><FaAngellist /></a></li> 
                </ul>
            </div>
        </nav>
        <div className="country">
            <a href="">USA
            <img src="https://masthead.scdn.co/29c1b3e4c97482ddf9ddaabdb3bcf977/flags/us.svg" alt=""></img>
            </a>
        </div>
        <nav className="bottom-links">
            {/* <ul>
                <li><a href="">Legal</a></li>
                <li><a href="">Privacy Center</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Cookies</a></li>
                <li><a href="">About Ads</a></li>
            </ul> */}
            <a>© Moefy</a>
        </nav>
    </footer>
);

export default Footer