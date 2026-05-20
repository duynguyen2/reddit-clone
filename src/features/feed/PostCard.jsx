import React from 'react';

export const PostCard = () => {


    return (
        <>
            <h2>{post.title}</h2>
            <p>{post.content}</p>

            <div>
                {comments}
            </div>
        </>
    );
}