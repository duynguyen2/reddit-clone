const API_ROOT = '/reddit';

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
        fetch('/reddit/r/reactjs.json')
            .then(r => {
                console.log('status', r.status);
                return r.text();
            })
            .then(console.log)
            .catch(console.error);
        const target = subreddit ? `${subreddit}` : 'popular';
        const response = await fetch(`${API_ROOT}/r/${target}.json`);

        console.log(response.status);
        if (!response.ok) {
            const text = await response.text();
            console.log(text);
            throw new Error(`HTTP ${response.status}`);
        }

        return await response.json();
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