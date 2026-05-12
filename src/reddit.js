const API_ROOT = 'https://www.reddit.com';

export const fetchSearchResults = (searchTerm) => {
    const baseURL = `${API_ROOT}/search/?q=%${encodeURIComponent(searchTerm)}`;
}

export const fetchPost = () => {

}

export const fetchSubreddit = async() => {
    const response = await fetch(`${API_ROOT}/subreddits.json`);
    const json = await response.json();

    return json; //placeholder
}