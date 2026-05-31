import React from 'react';
import { Comments } from './Comments';

export const Comment = ({ passedComment }) => {
    const {id, author, score, body, replies} = passedComment;

    /*
        reddit api comment format
        {
            "id": "1234",
            "author": "codingpro26",
            "score": 26,
            "created_utc": 1602334100,
            "body": "I see what you did with this project and it's great! How did you handle store management?",
            "replies": "" or {},
        }
    */

    return (
        <div>
            /*
                comment author and details
                comments can have replies so recursively call Comments component to display them
            */
            <div>
                <Avatar name={author} />
                <h3>{author}</h3>
                <p>{body}</p>
            </div>
            <p>{score}</p>
            {replies.length > 0 && ( //change the formatting of this to acount for string or object
                <div className="comments-list">
                    <Comments comments={replies} />
                </div>
            )}
        </div>
    );
}