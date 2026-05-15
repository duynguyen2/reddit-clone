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
        isLoading: false,
        error: null,
    },
    reducers: {
        showPost: (state, action) => {
            state.post = action.payload;
        },
        setPosts: () => {},
        getComments: (state, action) => {
            state.comments = action.payload.comments; // tbd if necessary here or to be put elsewhere
            return state.comments;
        }
    },
    extraReducers: (builder) => {
        builder
         .addCase(fetchPostThunk.pending, (state) => {
            state.error = null;
            state.isLoading = true;
         })
         .addCase(fetchPostThunk.fulfilled, (state, action) => {
            state.error = null;
            state.isLoading = false;
            state.post = action.payload.post;
            state.comments = action.payload.comments;
         })
         .addCase(fetchPostThunk.rejected, (state) => {
            state.error = action.error.message;
            state.isLoading = false;
         })
    }
});

export const selectPosts = (state) => state.post.post;
export const selectComments = (state) => state.post.comments;

export const { showPost, getComments } = postSlice.actions;

export default postSlice.reducer;