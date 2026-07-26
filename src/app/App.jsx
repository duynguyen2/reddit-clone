import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import './App.css'
import { Header } from '../components/Header/Header';
import { PostFeed } from '../features/feed/PostFeed';
import { Subreddits } from '../features/subreddits/Subreddits';
import { PostDetailed } from '../features/selectedPosts/PostDetailed';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Header />
      <div className="container">
        <aside>
          <Subreddits />
        </aside>
        <main className="feed-content">
          <Routes>
            <Route path="/" element={ <PostFeed /> }/>
            <Route path="/r/:currentSubreddit" element={ <PostFeed /> } /> {/* dynamic feed */}
            <Route path="/posts/:postId" element={ <PostDetailed /> } />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
