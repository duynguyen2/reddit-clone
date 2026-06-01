// Header will be the component that contains the logo for the home button and search bar
import React from 'react';
import { SearchBar } from '../../features/search/SearchBar';
import redditSmolIcon from '../../assets/reddit-smol-icon.png';

export const Header = () => {

    return (
        <header>
            <a href="/">
                <img className="reddit-smol-icon" src={redditSmolIcon} alt="Icon For Reddit Smol" />
            </a>
            <h1>Reddit <span>Smol</span></h1>
            <SearchBar />
        </header>
    );
}