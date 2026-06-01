// creating mock data since Reddit's public .json endpoints blocks fetch request from localhost

export const mockRedditPosts = [ // mock posts, formatted in the way that is expected from Reddit's API
  {
    data: {
      id: "t3_react101",
      title: "Why React 19 is a game changer for frontend developers",
      author: "code_ninja",
      subreddit: "reactjs",
      score: 1420,
      num_comments: 42,
      created_utc: 1717189200,
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=150&auto=format&fit=crop",
      url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop", // post image
      permalink: "/r/reactjs/comments/react101/why_react_19_is_a_game_changer/",
      is_video: false,
      selftext: "The new compiler is incredible. It completely eliminates the need for useMemo and useCallback in 90% of use cases. What are your thoughts on the new architecture?"
    }
  },
  {
    data: {
      id: "t3_redux202",
      title: "Redux Toolkit vs Context API in 2026: The Ultimate Guide",
      author: "state_master",
      subreddit: "javascript",
      score: 845,
      num_comments: 112,
      created_utc: 1717102800,
      thumbnail: "self", // no image text-only post
      url: "",
      permalink: "/r/javascript/comments/redux202/redux_toolkit_vs_context_api/",
      is_video: false,
      selftext: "I see this question asked every single day. If your state changes frequently or your app is large, use Redux Toolkit. If you are just passing down a dark mode theme, use Context. Stop overcomplicating your architecture!"
    }
  },
  {
    data: {
      id: "t3_vite303",
      title: "Vite is officially the standard. RIP Webpack.",
      author: "bundler_builder",
      subreddit: "webdev",
      score: 2311,
      num_comments: 204,
      created_utc: 1717016400,
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150&auto=format&fit=crop",
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      permalink: "/r/webdev/comments/vite303/vite_is_officially_the_standard/",
      is_video: false,
      selftext: "" // rich media post, no description text
    }
  }
];

export const mockPostComments = { // mock data for the posts, for the more detailed view of it
  "t3_react101": [
    {
      data: {
        id: "c1",
        author: "dan_abramov_fan",
        score: 112,
        body: "Fully agree on the compiler. Writing code without boilerplate feels like cheating.",
        created_utc: 1717191000
      }
    },
    {
      data: {
        id: "c2",
        author: "junior_dev_99",
        score: 14,
        body: "Does this mean I don't have to learn useMemo at all anymore? I just started learning React last week.",
        created_utc: 1717192800
      }
    }
  ],
  "t3_redux202": [
    {
      data: {
        id: "c3",
        author: "rtk_maintainer",
        score: 55,
        body: "Thanks for the shoutout! RTK Query specifically cuts down network code by thousands of lines.",
        created_utc: 1717104600
      }
    }
  ],
  "t3_vite303": []
};

export const mockSubreddits = [
    {
        data: {
            id: "sub_1",
            display_name: "reactjs",
            display_name_prefixed: "r/reactjs",
            icon_img: "https://api.dicebear.com/7.x/bottts/svg?seed=reactjs",
            public_description: "A community for the React JavaScript library",
            subscribers: 54000
        }
    },
    {
        data: {
            id: "sub_2",
            display_name: "javascript",
            display_name_prefix: "r/javascript",
            icon_img: "https://api.dicebear.com/7.x/bottts/svg?seed=javascript",
            public_description: "All about the JavaScript Programming Language",
            subscribers: 133700
        }
    },
    {
        data: {
            id: "sub_3",
            display_name: "webdev",
            display_name_prefix: "r/webdev",
            icon_img: "https://api.dicebear.com/7.x/bottts/svg?seed=webdev",
            public_description: "A community for Web Development and developers",
            subscribers: 428190
        }
    },
];