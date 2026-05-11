import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchPost from '../../reddit';

export const fetchPostThunk = createAsyncThunk('post/fetchPost', async(postPath, thunkAPI) => {
    const { post, comments } = await fetchPost(postPath); // function will created to fetch post
});

const postSlice = createSlice({
    name: "post",
    initialState: {
        post: null,
        comments: [],
        status: "idle",
        error: null,
    },
    reducers: {
        showPost: (state, action) => {
            state.post = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
         .addCase(fetchPostThunk.pending, (state) => {
            state.error = null;
            state.status = "loading";
         })
         .addCase(fetchPostThunk.fulfilled, (state, action) => {
            state.error = null;
            state.status = "succeeded";
            state.post = action.payload.post;
            state.comments = action.payload.comments;
         })
         .addCase(fetchPostThunk.rejected, (state) => {
            state.error = action.error.message;
            state.status = "failed";
         })
    }
});

export const selectPosts = (state) => state.post.post;
export const selectComments = (state) => state.post.comments;
export const selectStatus = (state) => state.post.status;
export const selectError = (state) => state.post.error;

export const { showPost } = postSlice.actions;

export default postSlice.reducer;