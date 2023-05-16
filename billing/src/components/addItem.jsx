import { React, useState, useEffect } from "react";
import axios from "axios";


const AddItem = ({ product, handleproductchange, setproduct }) => {

    useEffect(() => {
        async function fetchProductID() {
            const id = await axios.get('http://localhost:4000/getproductid');
            const newid = parseInt(id.data.result) + 1;
            setproduct((prev) => {
                return { ...prev, ['productID']: newid }
            });

        }
        fetchProductID();
    }, [])

    const addproduct = () => {

    }


    return (
        <>
            <div className="add-product">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-form">

                                <form>

                                    <div className="product-input">
                                        <label htmlFor="">Product ID</label>
                                        <input type="text" name="productID"
                                            value={product.productID} readOnly />
                                    </div>

                                    <div className="product-input">
                                        <label htmlFor="">Product Name</label>
                                        <input type="text" name="productName" placeholder="Name" onChange={handleproductchange} value={product.productName} />
                                    </div>

                                    <div className="product-input">
                                        <label>Quantity</label>
                                        <input type="Number" name="productQty" placeholder="Quantity" onChange={handleproductchange} value={product.productQty} />
                                    </div>

                                    <div className="product-input">
                                        <label>Price</label>
                                        <input type="Number" name="productPrice" placeholder="Price" onChange={handleproductchange} value={product.productPrice} />
                                    </div>

                                    <button onClick={addproduct}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddItem;