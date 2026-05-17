import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchPost from '../../reddit';

export const fetchSelectedPostThunk = createAsyncThunk('selectedPost/fetchSelectedPost', async(postPath) => {
    const { post, comments } = await fetchPost(postPath); // function will created to fetch post
    return { post, comments };
});

const selectedPostSlice = createSlice({
    name: 'selectedPost',
    initialState: {
        post: {},
        comments: [],
        isLoading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(fetchSelectedPostThunk.pending, (state) => {
            state.isLoading = true;
            state.error = null;
            state.post = {};
            state.comments = [];
         })
         .addCase(fetchSelectedPostThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.post = action.payload.post;
            state.comments = action.payload.comments;
         })
         .addCase(fetchSelectedPostThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
         })
    }
});

export const selectCurrentPost = (state) => state.selectedPost.post;
export const selectComments = (state) => state.selectedPost.comments;
export default selectedPostSlice.reducer;