import React from 'react';
import selectPosts from './postSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    /* handle upvoting, downvoting, routing to post link or at least a link that contains the individual post */

    return (
        <div>
            <h1>posts here maybe this will be a singular post and we feed into postfeed or just scrap one of them</h1>
        </div>
    );
}