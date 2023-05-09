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

  const [discount, setdiscount] = useState('');
  const [note, setnotes] = useState('');

  const notehandler = (value) => {
    setnotes(value);
    console.log(note);
  }

  const discounthandler = (_discount) => {
    setdiscount(_discount);
  }

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
                <Footer notehandler={notehandler} />
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
                <h6>{note}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
