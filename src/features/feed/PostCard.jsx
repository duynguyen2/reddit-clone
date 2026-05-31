import React from 'react';
import './PostCard.css';

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

    return (
        <div className="post-card">
            <h2 className="post-card-title">{post.title}</h2>
            <p className="post-card-content">{post.content}</p>
            {post.img && (
                <img src={post.img} alt={post.title} className="post-card-img" />
            )}

            <div>
                <img src={require("../../assets/reddit-smol-comment-icon.png")} alt="Number Of Comments" />
                <h3>{post.numComments}</h3>
            </div>
        </div>
    );
}