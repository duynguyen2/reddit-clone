import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import postReducer from '../features/post/postsSlice';
import selectedPostReducer from '../features/selectedPosts/selectedPostSlice';
import subredditReducer from '../features/subreddits/subredditsSlice';

export const store = configureStore({
    reducer: combineReducers({
        search: searchReducer,
        post: postReducer,
        selectedPost: selectedPostReducer,
        subreddit: subredditReducer
    }),
});