const API_ROOT = 'https://www.reddit.com';

export const fetchSearchResults = async(searchTerm) => {
    try {
        const response = await fetch(`${API_ROOT}/search.json?q=${encodeURIComponent(searchTerm)}`);
        const json = await response.json();

        return json;
    } catch (error) {
        console.error('Error fetching search results: ', error);
        throw error;
    }
};

export const fetchPosts = async(subreddit) => {
    try {
        const url = subreddit ? `${API_ROOT}/r/${subreddit}.json` : `${API_ROOT}/.json`
        const response = await fetch(url);
        const json = await response.json();

        return json;
    } catch (error) {
        console.error('Error fetching posts: ', error);
        throw error;
    }
};

export const fetchPostById = async(postId) => {
    try {
        const response = await fetch(`${API_ROOT}/by_id/t3_${postId}.json`);
        const json = await response.json();

        return json.data.children[0].data;
    } catch (error) {
        console.error('Error fetching post: ', error);
        throw error;
    }
};

export const fetchSubreddits = async() => {
    try {
        const response = await fetch(`${API_ROOT}/subreddits.json`);
        const json = await response.json();

        return json;
    } catch (error) {
        console.error('Error fetching subreddits: ', error);
        throw error;
    }
};