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
        isLoading: false,
        error: null,
    },
    reducers: { // decide if we should store and use locally saved searches
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload.searchTerm;
        },
        getSearchResults: (state, action) => {
            state.results = action.payload.results;
            return state.results;
        }
    },
    extraReducers: (builder) => {
        builder
         .addCase(fetchSearchThunk.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(fetchSearchThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            
         })
         .addCase(fetchSearchThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
         })
    }
});

export const selectSearchTerm = (state) => state.searchTerm;
export const selectResults = (state) => state.results;
export const { setSearchTerm, getSearchResults } = searchSlice.actions;
export default searchSlice.reducer;