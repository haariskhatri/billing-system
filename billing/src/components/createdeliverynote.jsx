import { React, useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Preloader from "./loader";
import PrintModal from "./printmodal";




const DeliveryNote = () => {

    const [saved, setsaved] = useState(false);
    const [form, setform] = useState({
        customerName: '',
        customerAddress: '',
        customerPincode: '',
        customerCity: '',
        customerState: '',
        customerPhonenumber: ''
    })

    const [showmodal, setshowmodal] = useState(false);

    async function fetchPostalData(pincode) {
        try {
            const response = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`);
            const data = response.data;
            if (data && data.length > 0) {
                const postOffice = data[0].PostOffice;
                if (postOffice && postOffice.length > 0) {
                    const finalDetail = postOffice[0];
                    return finalDetail;
                }
            }
            return null; // Return null if the data is not found or is invalid
        } catch (error) {
            console.error('Error fetching postal data:', error);
            throw error; // Rethrow the error to handle it at a higher level
        }
    }


    const checkdetails = (e) => {

        e.preventDefault();
        if (!form.customerName.trim()) {
            toast.error('Name cannot be Empty !')
            return;
        }
        else if (!form.customerAddress.trim()) {
            toast.error('Address cannot be Empty !')
            return;
        }
        else if (!form.customerCity.trim()) {
            toast.error('City cannot be Empty !')
            return;
        }
        else if (!form.customerPincode.trim() || form.customerPincode.length < 6) {
            toast.error('Pin Code cannot be Empty !')
            return;
        }
        else if (!form.customerState.trim()) {
            toast.error('State cannot be Empty !')
            return;
        }
        else if (!form.customerPhonenumber.trim() || form.customerPhonenumber.trim().length < 10) {
            toast.error('Phone Number Incomplete !')
            return;
        }
        else {
            setshowmodal(true);
        }



    }

    const handlechange = async (event) => {

        const { name, value } = event.target;
        console.log(name);

        if (name == 'customerPincode' && value.toString().length == 6) {
            setform((prev) => {
                return { ...prev, [name]: value }
            })
            const data = await fetchPostalData(value);

            if (data == null) {
                toast.error('PinCode Invalid')
                const reset = setform((prev) => {
                    return { ...prev, ['customerCity']: '', ['customerState']: '' }
                })
            }
            else {


                setform((prev) => {
                    return { ...prev, ['customerCity']: data.Block, ['customerState']: data.State }
                })
            }



        }
        else {


            setform((prev) => {
                return { ...prev, [name]: value }
            })


        }
    }





    const senderaddress = 'Man Motors\nScience City\nAhemdabad\nGujarat - 370 059 '



    const openmodal = (e) => {
        e.preventDefault();
        setshowmodal(true);
    }



    return (
        <>
            <div className="delivery-page">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-12">


                            <form className="delivery-note-form">

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name='customerName' value={form.customerName} placeholder="" aria-label="Username" aria-describedby="basic-addon1" onChange={handlechange} />
                                    <label id="basic-addon1">To</label>
                                </div>


                                <div className="form-floating mb-3">
                                    <textarea className="form-control" name='customerAddress' value={form.customerAddress} onChange={handlechange} aria-label="With textarea" placeholder="Address"></textarea>
                                    <label>Address</label>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" value={form.customerPincode} name="customerPincode" onChange={handlechange} aria-label="With textarea" placeholder=" " />
                                            <label>Pin Code</label>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingState" value={form.customerState} name='customerState' onChange={handlechange} placeholder="State" readOnly />
                                            <label htmlFor="floatingState">State</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">

                                        <div className="form-floating mb-3">
                                            <span>(+91)</span>
                                            <input type="text" className="form-control" style={{ paddingLeft: '55px' }} value={form.customerPhonenumber} name="customerPhonenumber" onChange={handlechange} aria-label="Username" aria-describedby="basic-addon1" />
                                            <label id="basic-addon1">Phone Number : </label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">

                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" placeholder="City" value={form.customerCity} name="customerCity" onChange={handlechange} aria-label="Username" aria-describedby="basic-addon1" />
                                            <label id="basic-addon1">City : </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-floating mb-3">
                                    <textarea className="form-control" aria-label="With textarea" placeholder="Address" height='150px' defaultValue={senderaddress}></textarea>
                                    <label>From</label>
                                </div>

                                <button className="delivery-submit-btn" onClick={checkdetails}>
                                    Print
                                </button>

                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                    {showmodal && <PrintModal form={form} showmodal={showmodal} setshowmodal={setshowmodal} />}
                </div >
            </div >
        </>
    )
}




export default DeliveryNote;