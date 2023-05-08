import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import DateBar from './components/datebar'
import AddressBar from './components/addressbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="invoice-page">
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-md-9">
              <div className="date-section">
                <DateBar />
                <AddressBar />
              </div>


            </div>
            <div className="col-md-3">
              5
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
