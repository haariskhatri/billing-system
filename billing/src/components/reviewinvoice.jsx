import React, { useState } from "react";

const ReviewInvoice = () => {

    const [discount, setdiscount] = useState('');

    const discountchangehandler = (event) => {
        setdiscount(event.target.value);
    }

    return (
        <>
            <h6>Discount</h6>
            <input type="Number" defaultValue="0.00" onChange={discountchangehandler} placeholder="Discount" />
        </>
    )
}

export default ReviewInvoice;