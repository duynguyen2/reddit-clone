import React from 'react';
import { BrowserRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits } from './subredditsSlice';

export const Subreddits = ({ name }) => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);

    /* should be able to change subreddits, once a different one is selected then it changes the feed to display the latest posts from that subreddit */
    const handleChangeSubreddit = () => {

    }

    return (
        <div> // temporary div, maybe create a card component
            <h2>Subreddits</h2>
            <ul>
                {subreddits.map(subreddit => (
                    <li>some subreddit</li>
                ))}
            </ul>
        </div>
    );
}