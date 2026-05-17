import { useState, useEffect } from 'react'; 
import { selectSearchTerm, clearSearchTerm } from './searchSlice';
import { selectPosts } from '../post/postSlice';
import { selectSubreddits } from '../subreddits/subredditsSlice'; 
import { useDispatch, useSelector } from 'react-redux';

export const Search = ({}) => {
    
    const [searchTerm, setSearchTerm] = useState(''); // debating between using state or simply using the selector
    const [results, setResults] = useState([]);
    
    const dispatch = useDispatch();
    const searchTermSelector = useSelector(selectSearchTerm); // debating between using state or simply using the selector
    const postsSelector = useSelector(selectPosts);
    const subredditsSelector = useSelector(selectSubreddits);

    const filteredSubreddits = subredditsSelector.filter(subreddits =>
        subreddits.name.toLowerCase().includes(input.toLowerCase())
    );

    const filteredPosts = postsSelector.filter(post => 
        post.post.toLowerCase().includes(input.toLowerCase())
    );

    const onSearchTermChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
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

            <div>
                <h3>Matching Posts</h3>
                {filteredPosts.map(post => post)}
                <h3>Matching Subreddits</h3>
                {filteredSubreddits.map(subreddit => subreddit.subreddits)} // debating on changing how subreddit should be found, either as array or string
            </div>
        </form>
    );
};