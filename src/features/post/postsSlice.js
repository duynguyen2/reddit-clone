import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from '../../reddit';

// fetch posts thunk for fetching by passing in the name of the subreddit
export const fetchPostsThunk = createAsyncThunk("posts/fetchPosts", async(subreddit) => {
    const response = await fetchPosts(subreddit);
    return response; // will need to restructure for the extraReducers to function
});

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        selectedSubreddit: 'r/popular',
        isLoading: false,
        error: null,
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setSubreddit: (state, action) => {
            state.selectedSubreddit = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
         .addCase(fetchPostsThunk.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(fetchPostsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.posts = action.payload.posts;
            state.selectedSubreddit = action.payload.selectedSubreddit;
         })
         .addCase(fetchPostsThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
         })
    }
});

export const selectVisiblePosts = (state) => {
    const posts = state.posts.posts;
    const searchTerm = state.search.searchTerm?.toLowerCase() || '';

    if(!searchTerm) return posts;

    return posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm)
    );
};
export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;