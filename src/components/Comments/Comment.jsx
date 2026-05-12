import React from 'react';
import { getComments, selectComments } from '../../features/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Comment = (props) => {
    const dispatch = useDispatch();
    const comment = useSelector(selectComments); // unsure if should use selector or just pull from array of comments

    return (
        <div>
            /* comment author and details */
        </div>
    );
}