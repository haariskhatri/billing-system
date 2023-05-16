import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import SideMenu from "../components/sidemenu";




const AddProductPage = () => {


    return (
        <>
            <div className="container-fluids">

                <div className="row">
                    <div className="col-md-3">
                        <SideMenu />
                    </div>
                    <div className="col-md-9">

                    </div>

                </div>

            </div>
        </>
    )
}

export default AddProductPage;