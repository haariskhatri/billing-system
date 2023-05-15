import React from "react";


const AddItem = () => {
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
                                        <input type="text" placeholder="ID" />
                                    </div>

                                    <div className="product-input">
                                        <label htmlFor="">Product Name</label>
                                        <input type="text" placeholder="Name" />
                                    </div>

                                    <div className="product-input">
                                        <label>Quantity</label>
                                        <input type="Number" placeholder="Quantity" />
                                    </div>

                                    <div className="product-input">
                                        <label>Price</label>
                                        <input type="Number" placeholder="Price" />
                                    </div>

                                    <button type="submit">Submit</button>
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