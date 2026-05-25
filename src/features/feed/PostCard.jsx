import React from 'react';

export const PostCard = ({ post }) => {

    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.content}</p>

            <div>
                // image for comments
                <h3>{post.numComments}</h3>
            </div>
        </>
    );
}