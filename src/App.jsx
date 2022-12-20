import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="App">
      <Header/>
      <h1> Hit Counter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} >
          count is {count}
       
        </button>

      </div>
   <Footer/>
    </div>
  )
}

export default App
