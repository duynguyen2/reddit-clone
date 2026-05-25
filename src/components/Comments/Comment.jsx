import React from 'react';
import { useDispatch } from 'react-redux';
import { selectComments } from '../../features/selectedPosts/selectedPostSlice'; 
import Comments from './Comments';

export const Comment = ({ comment }) => {
    const dispatch = useDispatch();

    return (
        <div>
            /*
                comment author and details
                comments can have replies so recursively call Comments component to display them
            */
            <div>
                <Comments />
            </div>
        </div>
    );
}