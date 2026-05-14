import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchSubreddit from '../../reddit';

export const fetchSubredditsThunk = ('subreddit/fetch', async() => {
    // to be implemented
    const json = fetchSubreddit();
    return json.data.children.map(subreddit => subreddit.data);
});

const subredditsSlice = createSlice({
    name: "subreddit",
    initialState: {
        subreddits: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(fetchSubredditsThunk.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(fetchSubredditsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.subreddits = action.payload;
         })
         .addCase(fetchSubredditsThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
         })
    }
});

export const selectSubreddits = (state) => state.subreddits;
export default subredditsSlice.reducers;