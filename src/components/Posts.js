import React from 'react';
import selectPosts from '../features/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    return(
        <div>
            
        </div>
    );
}