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
import logo from './public/images/logo.png'

function App() {


  const [items, setItems] = useState([]);
  const [biller, setbiller] = useState([{ nameto: '', emailto: '', phoneto: '', cityto: '', addressto: '' }]);
  const [discount, setdiscount] = useState(0);
  const [product, setproduct] = useState({ productID: '', productName: '', productQty: '', productPrice: '' });
  const [invoice, setinvoice] = useState(0);
  const [shipping, setshipping] = useState(0);
  const [itemerror, setitemerror] = useState(false);

  function addCommasToNumber(number) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);
  }


  const handleAddNew = () => {
    const newItem = {
      itemName: '', itemQty: '', itemPrice: '', itemBarcode: ''
    };
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    setItems(updatedItems);
  };

  const handleproduct = (product, index) => {
    const { productName, productQty, productPrice, productBarcode } = product.data;

    const updatedItems = [...items];
    updatedItems[index]["itemName"] = productName;
    updatedItems[index]["itemQty"] = 1;
    updatedItems[index]["itemBarcode"] = productBarcode;
    updatedItems[index]["itemPrice"] = productPrice;

    setItems(updatedItems);
  }


  const handleRemove = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  const handlediscountchange = (value) => {
    setdiscount(value);
  }


  const handlebillerchange = (event) => {
    const { name, value } = event.target;

    console.log(name)
    console.log(biller.nameto);

    setbiller((prevbiller) => {
      return { ...prevbiller, [name]: value }
    })
  }

  // const handleItemchange = (field, value) => {
  //   setitems((prevstate) => ({
  //     ...prevstate, [field]: value
  //   }))
  // }


  return (
    <>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="invoice-page">
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-md-9">
              <div className="date-section">
                <DateBar invoice={invoice + 1} setinvoice={setinvoice} />
                <AddressBar
                  handlebillerchange={handlebillerchange}
                  biller={biller}
                />
                <Billcard items={items} handleAddNew={handleAddNew} handleRemove={handleRemove} handleChange={handleChange} discount={discount} shipping={shipping} itemError={itemerror}
                  handleproduct={handleproduct}
                />
                <Footer />
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <div className="review-section">
                <Modal items={items} shipping={shipping} discount={discount} invoice={invoice}
                  biller={biller}
                />
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
