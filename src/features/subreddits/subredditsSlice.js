import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchSubreddits from '../../reddit';

export const fetchSubredditsThunk = createAsyncThunk('subreddits/fetchSubreddits', async() => {
    const json = await fetchSubreddits();
    return json.data.children.map(subreddit => subreddit.data);
});

const subredditsSlice = createSlice({
    name: "subreddits",
    initialState: {
        subreddits: [], // decide on keeping an array or using this to display individual subreddits instead of 1 whole list
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(fetchSubredditsThunk.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(fetchSubredditsThunk.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;
            state.subreddits = action.payload;
         })
         .addCase(fetchSubredditsThunk.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
         })
    }
});

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const selectSubredditsStatus = (state) => state.subreddits.status;
export const selectSubredditsError = (state) => state.subreddits.error;
export default subredditsSlice.reducer;