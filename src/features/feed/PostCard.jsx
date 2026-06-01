import React from 'react';
import './PostCard.css';
import commentIcon from '../../assets/reddit-smol-comment-icon.png';

export const PostCard = ({ post }) => {

    /*
        post data format
        {
            "id": "1234",
            "title": "Learning React and Redux in 2026: Reddit Clone Project",
            "author": "redditcloner26",
            "subreddit": "javascript",
            "score": 2026,
            "num_comments": 12,
            "created_utc": 1774828800,
            "permalink": "/r/javascript/learning_react_and_redux_in_2026_reddit_clone_project/",
            "url": "https://www.reddit.com/r/javascript/comments/1234/learning..../",
            "is_video": false,
            "post_hint": "self",
            "selftext": "Hey guys",
            "thumbnail": self
        }
    */

    const isImage = (url) => {
        if(!url) return false;
        return url.match(/\.(jpeg|jpg|gif|png)$/) != null || url.includes("images.unsplash.com");
    }

    return (
        <div className="post-card" style={{ cursor: 'pointer' }}>
            <h2 className="post-card-title">{post.title}</h2>
            <p className="post-card-content">{post.content}</p>
            {post.img && (
                <img src={post.img} alt={post.title} className="post-card-img" />
            )}

            <div>
                <img className="comment-icon" src={commentIcon} alt="Number Of Comments" />
                <h3>{post.numComments}</h3>
            </div>
        </div>
    );
}