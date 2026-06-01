import { selectSearchTerm, setSearchTerm } from './searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import './SearchBar.css';

// searchbar component to be put in the header component, meant to take the search and pass the info onward
export const SearchBar = () => {
    
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm); // keep consistency with using redux

    const onSearchTermChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    }

    const handleSearch = (e) => {
        e.preventDefault();
    }

    return ( // should only return the searchbar component and contain the search terms, it should not do actual work for displaying the search results
        <form className="search" onSubmit={handleSearch}>
            <input
                type="text"
                value={searchTerm}
                onChange={onSearchTermChange}
                placeholder="Enter Search..."
            />
            <button type="submit">Search</button>
        </form>
    );
};