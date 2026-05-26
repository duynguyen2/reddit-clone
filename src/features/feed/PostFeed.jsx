import React, { useEffect } from 'react';
import { useNavigate, Route, Link } from 'react-router-dom';
import { PostDetailed } from '../selectedPosts/PostDetailed';
import { selectSearchTerm, setSearchTerm } from '../../features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisiblePosts } from '../post/postsSlice';
import { fetchPostsThunk } from '../post/postsSlice';

// maybe implement as prop to control state
// handle displaying the list of posts and transition to post card for more detailed view
export const PostFeed = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // navigate through different routes to display a list of posts to a detailed view of post
    const posts = useSelector(selectVisiblePosts);
    const searchTerm = useSelector(selectSearchTerm);

    useEffect(() => {
        dispatch(fetchPostsThunk('popular'));
    }, [dispatch]);

    const filteredPosts = posts.filteredPosts(
        posts.post.toLowerCase().includes(searchTerm)
    );

    const handleSelectPost = (post) => {
        navigate(`/post/${post.id}`, { state: post });
    }

    return (
        <div>
            <h2>Feed</h2>
            // pull post and display
            {filteredPosts.map(post =>
                <PostCard post={post} />
            )}
            <PostDetailed />
        </div>
    );

}