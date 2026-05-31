import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import './App.css'
import { Header } from '../components/Header/Header';
import { PostFeed } from '../features/feed/PostFeed';
import { Subreddits } from '../features/subreddits/Subreddits';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <PostFeed />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  )
}

export default App
