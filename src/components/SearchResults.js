import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchTerm, { selectSearchTerm } from '../features/search/searchSlice';

export const SearchResults = () => {
    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    return (
        <div>
            
        </div>
    );
}
