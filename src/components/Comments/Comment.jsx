import React from 'react';
import { Comments } from './Comments';

export const Comment = ({ passedComment }) => {
    const {author, comment, replies} = passedComment;

    return (
        <div>
            /*
                comment author and details
                comments can have replies so recursively call Comments component to display them
            */
            <div>
                <Avatar name={author} />
                <h3>{author}</h3>
                <p>{commentText}</p>
            </div>
            {replies.length > 0 && (
                <div className="comments-list">
                    <Comments comments={replies} />
                </div>
            )}
        </div>
    );
}