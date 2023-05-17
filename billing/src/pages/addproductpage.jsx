import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/navbar";
import AddItem from "../components/addItem";
import SideMenu from "../components/sidemenu";
import { TableRowsTwoTone } from "@mui/icons-material";
import AddCategory from "../components/addcategory";
import axios from "axios";




const AddProductPage = () => {

    const [product, setproduct] = useState({ productID: '', productName: '', productCategory: '', productQty: '', productPrice: '' })
    const [modalstatus, setmodalstatus] = useState(false);
    const [newcategory, setnewcategory] = useState('');
    const [categories, setCategories] = useState([]);


    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:4000/getcategories');

            setCategories(response.data.categories)
        } catch (error) {
            console.error('Error fetching categories:', error);

        }
    };

    useEffect(() => {
        fetchCategories();
    }, [])


    const handlechange = (event, productID) => {
        const { name, value } = event.target;

        if (name == 'productCategory' && value == 'newcategory') {
            setnewcategory(value);
            setmodalstatus(true);
            fetchCategories();
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
                {console.log(categories)}
                <div className="row">
                    <div className="col-md-3">
                        <SideMenu />
                    </div>
                    <div className="col-md-9">
                        <AddItem product={product} handleproductchange={handlechange}
                            setproduct={setproduct} setnewcategory={setnewcategory}
                            newcategory={newcategory} setmodalstatus={setmodalstatus} categories={categories} fetchCategories={fetchCategories}
                        />
                        {modalstatus && <AddCategory setCategories={setCategories} fetchCategories={fetchCategories} modalstatus={modalstatus} setmodalstatus={setmodalstatus} />}

                    </div>

                </div>

            </div>
        </>
    )
}

export default AddProductPage;