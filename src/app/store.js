import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import postReducer from '../features/post/postSlice';

export const store = configureStore({
    search: searchReducer,
    post: postReducer,
});