import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import postReducer from '../features/post/postSlice';
import subredditReducer from '../features/subreddits/subredditSlice';

export const store = configureStore({
    reducer: combineReducers({
        search: searchReducer,
        post: postReducer,
        subreddit: subredditReducer
    }),
});