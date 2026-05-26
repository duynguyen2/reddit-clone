import React from 'react';
import './PostCard.css';

export const PostCard = ({ post }) => {

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