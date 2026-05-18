import React from 'react';
import { Route, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPost, selectComments } from '../selectedPost/selectedPostSlice';

export default PostDetailed = () => {
    const postID = useParams();
    const dispatch = useDispatch();
    const selectedPost = useSelector(selectCurrentPost);
    const comments = useSelector(selectComments);

    return (
        <>
        </>
    );
}
