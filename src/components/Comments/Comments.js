import React from 'react';
import selectComments from '../../features/post/postSlice';
import { useSelector } from 'react-redux';
import Comment from './Comment';

export const Comments = () => {
    const comments = useSelector(selectComments);

    return (
        <div>
            /* display multiple comments */
        </div>
    );
}