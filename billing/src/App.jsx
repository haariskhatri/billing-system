import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import DateBar from './components/datebar'
import AddressBar from './components/addressbar'
import Billcard from './components/billcard'
import Footer from './components/footer'
import ReviewInvoice from './components/reviewinvoice'
import Modal from './components/modal'

function App() {

  // const [items, setitems] = useState([]);

  // const handleBillchange = (field, value) => {
  //   setbill((prevstate) => ({
  //     ...prevstate, [field]: value
  //   }))
  // }

  // const AddNewItem = (item) => {
  //   setitems((prevstate) => {
  //     return [...prevstate, item]
  //   })
  // }
  const [items, setItems] = useState([]);
  const [discount, setdiscount] = useState(0);
  const [invoice, setinvoice] = useState(0);
  const [shipping, setshipping] = useState(0);



  const handleAddNew = () => {
    const newItem = { itemName: '', itemQty: '', itemPrice: '', itemBarcode: '' };
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    setItems(updatedItems);
  };

  const handleRemove = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const handlediscountchange = (value) => {
    setdiscount(value);
  }

  const handleinvoicechange = (value) => {
    setinvoice(value);
  }

  const modalchangehandler = () => {
    setmodal(true);
  }

  // const handleItemchange = (field, value) => {
  //   setitems((prevstate) => ({
  //     ...prevstate, [field]: value
  //   }))
  // }


  return (
    <>

      <div className="invoice-page">
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-md-9">
              <div className="date-section">
                <DateBar invoice={invoice + 1} setinvoice={setinvoice} />
                <AddressBar />
                <Billcard items={items} handleAddNew={handleAddNew} handleRemove={handleRemove} handleChange={handleChange} discount={discount} shipping={shipping} />
                <Footer />
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <div className="review-section">
                <Modal items={items} shipping={shipping} discount={discount} invoice={invoice} />
              </div>
              <div className="review-details">
                <ReviewInvoice discountchangehandler={handlediscountchange} shippingchangehandler={setshipping} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
