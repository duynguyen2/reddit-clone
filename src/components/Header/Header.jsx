// Header will be the component that contains the logo for the home button and search bar
import React from 'react';
import './Header.css';
import { SearchBar } from '../../features/search/SearchBar';
import redditSmolIcon from '../../assets/reddit-smol-icon.png';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <header>
            <Link className="home-button" to="/">
                <img className="reddit-smol-icon" src={redditSmolIcon} alt="Icon For Reddit Smol" />
                <h1>Reddit <span>Smol</span></h1>
            </Link>
            <SearchBar />
        </header>
    );
}