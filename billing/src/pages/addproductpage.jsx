import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import AddItem from "../components/addItem";
import SideMenu from "../components/sidemenu";



const AddProductPage = () => {

    const [product, setproduct] = useState({ productID: '', productName: '', productQty: '', productPrice: '' })



    const handlechange = (event, productID) => {
        const { name, value } = event.target;

        setproduct((prev) => {
            return { ...prev, [name]: value };
        })

    }

    return (
        <>
            <div className="container-fluids">

                <div className="row">
                    <div className="col-md-3">
                        <SideMenu />
                    </div>
                    <div className="col-md-9">
                        <AddItem product={product} handleproductchange={handlechange}
                            setproduct={setproduct} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProductPage;