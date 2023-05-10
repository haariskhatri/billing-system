import React, { useState } from "react";

const ReviewInvoice = (props) => {



    const discountchangehandler = (event) => {
        event.preventDefault();
        const givendiscount = event.target.value;
        props.discounthandler('ItemDiscount', givendiscount);
    }

    return (
        <>
            <h6>Discount</h6>
            <input type="Number" onChange={discountchangehandler} placeholder="Discount" />
        </>
    )
}

export default ReviewInvoice;