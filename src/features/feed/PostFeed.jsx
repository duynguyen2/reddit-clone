import React from 'react';
import { useNavigate, Route, Link } from 'react-router-dom';
import Posts from '../post/Posts';
import PostDetailed from '../selectedPosts/PostDetailed';
// import from feedSlice
import { setSearchTerm, clearSearchTerm } from '../../features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisiblePosts } from '../posts/postsSlice';
import { fetchPostsThunk } from '../post/postsSlice';

// maybe implement as prop to control state
// handle displaying the list of posts and transition to post card for more detailed view
export const PostFeed = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // navigate through different routes to display a list of posts to a detailed view of post
    const posts = useSelector(selectVisiblePosts);

    useEffect(() => {
        dispatch(fetchPostsThunk('popular'));
    }, [dispatch]);

    const getFilteredPosts = (e) => {
        dispatch(setSearchTerm(e.target.value))
    }

    const handleSelectPost = (post) => {

    }

    return (
        <div>
            <h2>Feed</h2>
            // pull post and display
            <Posts /> // if a post is clicked on, then swap to a PostDetailed component of that postfeed
            <PostDetailed />
        </div>
    );

}