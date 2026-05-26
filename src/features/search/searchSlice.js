import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSearchResults } from '../../reddit';

// debating to keep this here or move it over
/*
export const fetchSearchThunk = createAsyncThunk('search/fetchSearchResults', async(searchTerm) => {
    const results = await fetchSearchResults(searchTerm); // function will be created to fetch search results based on search terms
    return results.data.children.map(element => element.data);
});
*/
// storing only the term for UI
const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchTerm: "",
        /*
        isLoading: false,
        error: null,
        */
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        clearSearchTerm: (state) => {
            state.searchTerm = '';
        }
    },
    /*
    extraReducers: (builder) => {
        builder
         .addCase(fetchSearchThunk.pending, (state) => {
            state.isLoading = true;
            state.error = null;
         })
         .addCase(fetchSearchThunk.fulfilled, (state) => {
            state.isLoading = false;
         })
         .addCase(fetchSearchThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
         })
    }
    */
});

export const selectSearchTerm = (state) => state.search.searchTerm;
export const { setSearchTerm, clearSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;