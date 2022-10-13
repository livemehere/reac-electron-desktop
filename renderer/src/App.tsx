import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log((window as any).electronAPI)
    },[])

  return (
    <div className="App">
        <h1>DAK.GG Desktop App</h1>
    </div>
  )
}

export default App
