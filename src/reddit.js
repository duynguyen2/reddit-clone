const API_ROOT = 'https://www.reddit.com';

export const fetchSearchResults = async(searchTerm) => {
    try {
        const response = await fetch(`${API_ROOT}/search.json?q=${encodeURIComponent(searchTerm)}`);
        const json = await response.json();

        return json;
    } catch (error) {
        throw error;
    }
}

export const fetchPosts = async() => {
    try {
        const response = await fetch(`${API_ROOT}/`);
        const json = await response.json();

        return json;
    } catch (error) {
        throw error;
    }
    
}

export const fetchSubreddits = async() => {
    try {
        const response = await fetch(`${API_ROOT}/subreddits.json`);
        const json = await response.json();

        return json;
    } catch (error) {
        throw error;
    }
}