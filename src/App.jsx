import { useState } from 'react'
import { Link } from "react-router-dom"

import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Setup</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Link to="profile/Spinach">To the Spinach Profile Page</Link>
      <br/>
      <Link to="profile/popeye">To the Popeye Profile Page</Link>
      <br/>

    </>
  )
}

