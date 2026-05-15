import React from 'react';
import { BrowserRouter } from 'react-router'; // routing so that upvoting and downvoting do not refresh the page, nor does pulling a list of comments for a post
import { selectPosts, getComments } from './postSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const comments = getComments();

    /*
        handle upvoting, downvoting, routing to post link or at least a link that contains the individual post
        the upvoting and downvoting won't really be adding onto the posts in reality, due to not being logged into the official Reddit servers
        and the API we are using doesn't really allow for it
        a post can only be upvoted, downvoted or neither, but never both at the same time
    */
    const handleUpVote = (e) => {

    }

    const handleDownVote = (e) => {

    }

    return (
        <div>
            <h1>posts here maybe this will be a singular post and we feed into postfeed or just scrap one of them</h1>
            {comments.map(comment => comment)}
            <button>UpVote Arrow Here</button>
            <button>DownVote Arrow Here</button>
        </div>
    );
}