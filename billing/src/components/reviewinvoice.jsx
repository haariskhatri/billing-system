import React, { useState } from "react";

const ReviewInvoice = (props) => {



    const discountchangehandler = (event) => {
        event.preventDefault();
        const givendiscount = event.target.value;
        props.discountchangehandler(parseInt(givendiscount));
    }

    const shippingchangehandler = (event) => {
        event.preventDefault();
        const shippingcharge = event.target.value;
        props.shippingchangehandler(shippingcharge);

    }

    return (
        <>
            <div className="right-panel">
                <label >Discount</label>
                <input type="Number" onChange={discountchangehandler} placeholder="Discount" />
                <label>Shipping</label>
                <input type="Number" onChange={shippingchangehandler} placeholder="Shipping" />
            </div>
        </>
    )
}

export default ReviewInvoice;