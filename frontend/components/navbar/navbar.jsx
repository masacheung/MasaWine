import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <div className="navbar">
                <Link to="/" className="logo-navbar">
                    <img src={window.wine} className="logo-nav"/>
                    <p>MasaWine</p>
                </Link>
                <ul className="ul-nav">
                    <li>
                        <a href="https://github.com/masacheung" target="_blank" rel="noreferrer noopener">Github</a>
                    </li>
                    <li>
                        <Link to="/">Top 100</Link>
                    </li>
                    <li>
                        <Link to="/wineries">Wineries</Link>
                    </li>
                    <li>
                        <Link to="/wines">Wines</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default NavBar;