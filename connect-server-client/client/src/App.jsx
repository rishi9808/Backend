import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[jokes])



  return (
    <>
      <h1>Jokes</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((jokes,index) => (
          <div key={jokes.id}>
            <h3>{jokes.setup}</h3>
            <p>{jokes.punchline}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
