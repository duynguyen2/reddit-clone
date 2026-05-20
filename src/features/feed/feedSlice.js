// maybe scrap feed since we have so many separate components, or scrap those and implement them into feed
import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({ // to be worked on
    name: 'feed',
    initialState: {
        feed: [],
        searchTerm: "",
        subreddit: "",
        comments: [],
        // unsure of what else should be put on a feed, will implement later
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSubreddit: (state, action) => {
            state.subreddit = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
         .addCase()
         .addCase()
         .addCase()
    }
});

export const selectFeed = (state) => state.feed;
export default feedSlice.reducers;