import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectedPostThunk, selectCurrentPost, selectComments } from './selectedPostSlice';
import { Comments } from '../../components/Comments/Comments';
import './PostDetailed.css';

// display more detailed view of one post, showing the post details and comments
export const PostDetailed = () => {
    const { postId } = useParams(); // use params to read the route param
    const dispatch = useDispatch();

    useEffect(() => {
        if(postId) {
            dispatch(fetchSelectedPostThunk(postId));
        }
    }, [postId, dispatch]);
    
    const selectedPost = useSelector(selectCurrentPost).data;
    const comments = useSelector(selectComments);

    if(!selectedPost) {
        return (
            <div>
                <Link className="post-details" to="/">Go Back To Feed</Link>
                <p>Loading Post...</p>
            </div>
        );
    }

    return (
        <div>
            <Link className="back-button" to="/">Go Back To Feed</Link>

            <article className="post-details">
                <h2>{selectedPost.title || "No Post"}</h2>
                <p>{selectedPost.selftext || "No Content"}</p>
                {selectedPost.thumbnail && (
                    <img src={selectedPost.url} alt={selectedPost.title} className="post-card-img" />
                )}
                <h3>Comments <span>{selectedPost.num_comments}</span></h3>
                <Comments comments={selectedPost.comments} />
            </article>
        </div>
    );
}
