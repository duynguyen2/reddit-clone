import React from 'react';
import { Route, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectedPostThunk, selectCurrentPost, selectComments } from './selectedPostSlice';
import { Comments } from '../../components/Comments/Comments';
import './PostDetailed.css';

// display more detailed view of one post, showing the post details and comments
export const PostDetailed = ({  }) => {
    const { postId } = useParams(); // use params to read the route param
    const dispatch = useDispatch();
    
    const selectedPost = useSelector(selectCurrentPost);
    const comments = useSelector(selectComments);

    useEffect(() => {
        dispatch(fetchSelectedPostThunk(postId));
    }, [postId, dispatch]);

    if(!selectedPost) {
        return (
            <div>
                <button className="post-details">Go Back To <Feed></Feed></button>
                <p>Loading Post...</p>
            </div>
        );
    }

    return (
        <>
            <button className="back-button">Go Back To Feed</button>

            <article className="post-details">
                <h2>{selectedPost.title}</h2>
                <p>{selectedPost.selftext}</p>
                <h3>Comments <span>{selectedPost.num_comments}</span></h3>
                <Comments comments={comments} />
            </article>
        </>
    );
}
