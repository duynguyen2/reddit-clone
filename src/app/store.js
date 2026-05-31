import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import postsReducer from '../features/post/postsSlice';
import selectedPostReducer from '../features/selectedPosts/selectedPostSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';

export const store = configureStore({
    reducer: combineReducers({
        search: searchReducer,
        posts: postsReducer,
        selectedPost: selectedPostReducer,
        subreddits: subredditsReducer,
    }),
});