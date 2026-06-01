import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits } from './subredditsSlice';
import { selectSelectedSubreddit, fetchPostsThunk } from '../post/postsSlice';
import { fetchSubredditsThunk } from './subredditsSlice';

export const Subreddits = ({ }) => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits); // pull array of subreddits to display
    const { currentSubreddit } = useParams();

    useEffect(() => {
        dispatch(fetchSubredditsThunk('popular'));
    }, [dispatch]);

    /*
    useEffect(() => {
        dispatch(setSelectedSubreddit(currentSubreddit));
        dispatch(fetchPostsThunk(currentSubreddit))
    }, [currentSubreddit, dispatch]);

    // should be able to change subreddits, once a different one is selected then it changes the feed to display the latest posts from that subreddit 
    const handleChangeSubreddit = (subreddit) => {
        dispatch(setSelectedSubreddit(subreddit));
    }
    */

    return (
        <div className="sidebar"> temporary div, maybe create a card component
            <h2>Subreddits</h2>
            <ul>
                {subreddits.map(subreddit => (
                    <li key={subreddit.id || subreddit.display_name}>
                        <Link to={`/r/${subreddit.display_name}`}>
                        {subreddit.display_name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}