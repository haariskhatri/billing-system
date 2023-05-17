import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Barcode from "react-barcode";


const BarcodeGenerator = () => {

    const product = [{ productID: 1, productName: "Book", productPrice: 100 }, { productID: 2, productName: "Book", productPrice: 100 }, { productID: 3, productName: "Book", productPrice: 100 }, { productID: 4, productName: "Book", productPrice: 100 }]


    useEffect(() => {
        JsBarcode(".barcode").init();
    }, [])


    return (
        <div className="d-flex flex-wrap">
            <div className="barcode-box text-center">
                <svg className="barcode"
                    jsbarcode-format="CODE39"
                    jsbarcode-value="01"
                    jsbarcode-textmargin="0"
                    jsbarcode-fontoptions="bold">
                </svg>
                <h6>{product.productName}</h6>
                <h6>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(product.productPrice)}</h6>
            </div>
        </div>
    );
}

export default BarcodeGenerator;