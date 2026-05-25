import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import './App.css'
import Header from '../components/Header';
import PostFeed from '../components/PostFeed';
import Subreddits from '../features/subreddits/Subreddits';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Header />
      </main>
      
      <body>
        <PostFeed />
      </body>

      <aside>
        <Subreddits />
      </aside>
    </>
  )
}

export default App
