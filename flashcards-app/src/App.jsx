import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <h1>Hello World!</h1>
      <p>{count}</p>
      <button>Click</button>
    </>
  )
}

export default App
