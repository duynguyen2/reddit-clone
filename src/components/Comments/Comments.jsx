import React from 'react';
import selectComments from '../../features/post/postSlice';
import { useSelector } from 'react-redux';
import Comment from './Comment';

export const Comments = ({ comments }) => {

    if(!comments || comments.length === 0) { // check if the post has comments
        return <p>No comments for this post.</p>
    }

    return (
        <ul>
            /* display multiple comments */
            {comments.map(comment => (
                <li><Comment comment={comment} /></li>
            ))}
        </ul>
    );
}