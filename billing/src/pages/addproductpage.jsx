import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/navbar";
import AddItem from "../components/addItem";
import SideMenu from "../components/sidemenu";
import { TableRowsTwoTone } from "@mui/icons-material";



const AddProductPage = () => {

    const [product, setproduct] = useState({ productID: '', productName: '', productCategory: '', productQty: '', productPrice: '' })
    const [newcategory, setnewcategory] = useState(false)


    const handlechange = (event, productID) => {
        const { name, value } = event.target;

        if (value == 'newcategory') {
            setnewcategory(true);
        }

        else {



            setproduct((prev) => {
                return { ...prev, [name]: value };
            })

        }

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
                            setproduct={setproduct} setnewcategory={setnewcategory}
                            newcategory={newcategory}
                        />
                        { }

                    </div>

                </div>

            </div>
        </>
    )
}

export default AddProductPage;