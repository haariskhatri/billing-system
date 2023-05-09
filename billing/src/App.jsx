import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import DateBar from './components/datebar'
import AddressBar from './components/addressbar'
import Billcard from './components/billcard'
import Footer from './components/footer'
import ReviewInvoice from './components/reviewinvoice'

function App() {

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
                <Billcard />
                <Footer />
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <div className="review-section">
                <button className="review-button">
                  Review Invoice
                </button>
              </div>
              <div className="review-details">
                <ReviewInvoice />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
