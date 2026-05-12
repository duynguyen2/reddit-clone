import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSubreddits } from './subredditsSlice';

export const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits);

    return (
        <div>
        </div>
    );
}