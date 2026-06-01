import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from '../../reddit';
import { mockRedditPosts } from '../../mockData';

// fetch posts thunk for fetching by passing in the name of the subreddit
export const fetchPostsThunk = createAsyncThunk("posts/fetchPosts", async(subreddit) => {
    /*
    const response = await fetchPosts(subreddit);
    return {
        posts: response.data.children.map(
            child => child.data
        ),
        selectedSubreddit: subreddit || "popular",
    }; // will need to restructure for the extraReducers to function
    */

    // using mock data until workaround for reddit cors block
    return {
        posts: mockRedditPosts.map(child => child.data),
        subreddit: subreddit || "popular"
    };
});

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        selectedSubreddit: 'r/popular',
        status: 'idle',
        error: null,
        selectedPostId: null,
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setSubreddit: (state, action) => {
            state.selectedSubreddit = action.payload;
        },
        setSelectedPostId: (state, action) => {
            state.selectedPostId = action.payload;
        },
        clearSelectedPostId: (state) => {
            state.selectedPostId = null;
        },
    },
    extraReducers: (builder) => {
        builder
         .addCase(fetchPostsThunk.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(fetchPostsThunk.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;
            state.posts = action.payload.posts;
            state.selectedSubreddit = action.payload.selectedSubreddit;
         })
         .addCase(fetchPostsThunk.rejected, (state, action) => {
            state.status = 'failed';
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
export const selectPosts = (state) => state.posts.posts;
export const selectSelectedSubreddit = (state) => state.posts.selectedSubreddit;
export const selectPostsStatus = (state) => state.posts.status;
export const selectPostsError = (state) => state.posts.error;
export const selectSelectedPostId = (state) => state.posts.selectedPostId;

export const { setSelectedPostId, clearSelectedPostId } = postsSlice.actions;

export default postsSlice.reducer;