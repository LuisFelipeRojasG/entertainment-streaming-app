import React from "react";

const Header = () => {
    return (
        <header>
            <h1>ETSA</h1>
            <nav className="header__nav">
                <ul className="header__nav--links">
                    <li><a href="#">Menu</a>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Discover</a></li>
                            <li><a href="#">Awards</a></li>
                            <li><a href="#">Celebrities</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Library</a>
                        <ul>
                            <li><a href="#">Recent</a></li>
                            <li><a href="#">Top Rated</a></li>
                            <li><a href="#">Downloaded</a></li>
                            <li><a href="#">Playlists</a></li>
                            <li><a href="#">Watchlist</a></li>
                            <li><a href="#">Completed</a></li>
                        </ul>
                    </li>
                    <li><a href="#">General</a>
                        <ul>
                            <li><a href="#">Settings</a></li>
                            <li><a href="#">Log out</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;