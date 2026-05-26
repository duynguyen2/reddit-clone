// Header will be the component that contains the logo for the home button and search bar
import React from 'react';
import { SearchBar } from '../../features/search/SearchBar';

export const Header = () => {

    return (
        <header>
            <a href="/">
                <img src={"../../assets/reddit-smol-icon.png"} alt="Icon For Reddit Smol" />
            </a>
            <h1>Reddit <span>Smol</span></h1>
            <SearchBar />
        </header>
    );
}