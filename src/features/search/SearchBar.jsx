import { useState, useEffect } from 'react'; 
import { selectSearchTerm } from './searchSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Search = ({}) => {
    
    const [searchTerm, setSearchTerm] = useState(''); // debating between using state or simply using the selector
    const [results, setResults] = useState([]);
    
    const dispatch = useDispatch();
    const searchTermSelector = useSelector(selectSearchTerm); // debating between using state or simply using the selector

    const onSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearch = () => {

    }


    return(
        <form>
            <input
                type="text"
                onChange={onSearchTermChange}
                placeholder="Enter Search..."
            />
            <button type="submit" onSubmit={handleSearch}>Search</button>
        </form>
    );
};