import React from 'react';
import { useNavigate, Route, Link } from 'react-router-dom';
import Posts from '../post/Posts';
// import from feedSlice
import { setSearchTerm, clearSearchTerm } from '../../features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisiblePosts } from '../posts/postsSlice';
import { fetchPostsThunk } from '../post/postsSlice';

// maybe implement as prop to control state
export const PostFeed = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
            <Posts />
        </div>
    );

}