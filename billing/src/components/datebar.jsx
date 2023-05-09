import React, { useEffect, useState } from "react";
import Logo from '../public/images/logo.png'



const DateBar = () => {
    const [date, Setdate] = useState('');
    const [duedate, Setduedate] = useState('');
    const [invoiceNumber, SetInvoiceNumber] = useState('');


    useEffect(() => {
        const datenow = new Date().toLocaleDateString();
        const random = Math.random();
        SetInvoiceNumber(random);
        Setdate(datenow);
    }, [])

    const duedatehandler = (event) => {
        Setduedate(event.target.value);
    }

    return (
        <>
            <div className="date">
                <div className="invoice-dates">
                    <p><b>Current Date : </b> {date} </p>
                    <p><b>Due Date : </b> <input type="date" value={duedate} className="due-date" onChange={duedatehandler} /></p>
                </div>
                <img src={Logo} />
                <div className="invoice-number">
                    <p><b>Invoice Number : </b> {invoiceNumber}</p>
                </div>
            </div>
        </>
    )
}

export default DateBar;