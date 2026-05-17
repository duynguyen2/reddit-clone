const API_ROOT = 'https://www.reddit.com';

export const fetchSearchResults = async(searchTerm) => {
    const res = fetch(`${API_ROOT}/search/?q=%${encodeURIComponent(searchTerm)}`);
    const json = baseURL.json(res);
    return json;
}

export const fetchPosts = async() => {
    
}

export const fetchSubreddit = async() => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();

    return json; //placeholder
}