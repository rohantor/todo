import { useEffect, useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
function App() {
  const [currentDateTime, setCurrentDateTime] = useState('')
  useEffect(() => {
    setInterval(() => {
      setCurrentDateTime(
        new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: true,
        })
      )
    }, 1000)
  }, [])
  return (
    <div className='App'>
      <Homepage></Homepage>
      <h1 style={{ position: 'absolute', top: '0rem', right: '3rem' }}>
        {currentDateTime}
      </h1>
    </div>
  )
}

export default App
