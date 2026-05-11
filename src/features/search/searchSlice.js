import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchSearchResults from '../../reddit';

export const fetchSearchThunk = createAsyncThunk('search/fetchSearchResults', async({ searchTerm }) => {
    const results = await fetchSearchResults(searchTerm); // function will be created to fetch search results based on search terms
    return results;
});

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchTerm: "",
        results: [],
        status: "idle",
        error: null,
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload.searchTerm;
        },
    },
    extraReducers: (builder) => {
        builder
         .addCase(fetchSearchThunk.pending, (state) => {
            state.status = "loading";
            state.error = null;
         })
         .addCase(fetchSearchThunk.fulfilled, (state, action) => {
            state.status = "succeeded";
            
         })
         .addCase(fetchSearchThunk.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
         })
    }
});

export const selectSearchTerm = (state) => state.searchTerm;
export const selectResults = (state) => state.results;

export default searchSlice.reducer;