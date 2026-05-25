import React from 'react';
import { Route, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPost, selectComments } from '../selectedPost/selectedPostSlice';
import { Comments } from '../../components/Comments/Comments';

// display more detailed view of one post, showing the post details and comments
export default PostDetailed = ({  }) => {
    const postID = useParams(); // use params to read the route param
    const dispatch = useDispatch();
    const selectedPost = useSelector(selectCurrentPost);
    const comments = useSelector(selectComments);

    return (
        <>
            <h2>{postTitle}</h2>
            <p>{postContent}</p>
            <h3>Comments</h3>
            <Comments comments={comments} />
        </>
    );
}
