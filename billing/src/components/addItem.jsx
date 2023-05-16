import { React, useState, useEffect } from "react";
import axios from "axios";
import Preloader from "./loader";


const AddItem = ({ product, handleproductchange, setproduct }) => {

    const [saved, setsaved] = useState(false);

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

    const addproduct = async (e) => {
        e.preventDefault();
        setsaved(true); // Set isLoading to true to show the loader

        try {
            const data = {
                productID: product.productID,
                productName: product.productName,
                productQty: product.productQty,
                productPrice: product.productPrice
            }

            const senddata = await axios.post('http://localhost:4000/addproduct', data);
        } catch (error) {
            console.error('Error saving product:', error);
        } finally {
            setsaved(false);
        }
    };



    return (
        <>
            <div className="add-product">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-form">

                                <form onSubmit={addproduct}>

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

                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {saved && <Preloader />}
        </>
    )
}

export default AddItem;