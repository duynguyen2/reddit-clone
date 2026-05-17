import React from 'react';
import Posts from '../post/Posts';
// import from feedSlice
import { setSearchTerm, clearSearchTerm } from '../../features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisiblePosts } from '../posts/postsSlice';

// maybe implement as prop to control state
export const PostFeed = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectVisiblePosts);

    const getFilteredPosts = (e) => {
        dispatch(setSearchTerm(e.target.value))
    }

    return (
        <>
            // pull post and display
        </>
    );

}