import { React, useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Preloader from "./loader";



const AddItem = ({ product, handleproductchange, setproduct }) => {

    const [saved, setsaved] = useState(false);
    const [categories, setCategories] = useState([]);
    const [id, setid] = useState()



    async function fetchProductID() {
        const id = await axios.get('http://localhost:4000/getproductid');
        setid(id.data.id);
        const newid = id.data.id;
        setproduct((prev) => {
            return { ...prev, ['productID']: newid }
        });

    }

    useEffect(() => {


        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:4000/getcategories');

                setCategories(response.data.categories)
            } catch (error) {
                console.error('Error fetching categories:', error);

            }
        };

        fetchProductID();
        fetchCategories();
    }, [])

    const addproduct = async (e) => {
        e.preventDefault();
        setsaved(true); // Set isLoading to true to show the loader

        try {
            const data = {
                productID: product.productID,
                productName: product.productName,
                productCategory: product.productCategory,
                productQty: product.productQty,
                productPrice: product.productPrice
            }

            const senddata = await axios.post('http://localhost:4000/addproduct', data);
            if (senddata) {
                toast.success('Product Saved Successfully !')
            }
            const reset = await setproduct({ productID: '', productName: '', productCategory: '', productQty: '', productPrice: '' })

        } catch (error) {
            console.error('Error saving product:', error);
        } finally {
            setsaved(false);
            fetchProductID();
        }
    };




    return (
        <>
            <div className="add-product">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-form">

                                <form onSubmit={addproduct} id="product-form">

                                    <div className="product-input">
                                        <label htmlFor="">Product ID</label>
                                        <input type="text" name="productID"
                                            defaultValue={id} readOnly />
                                    </div>

                                    <div className="product-input">
                                        <label htmlFor="">Product Name</label>
                                        <input type="text" name="productName" placeholder="Name" onChange={handleproductchange} value={product.productName}

                                        />
                                    </div>

                                    <div className="product-input">
                                        <label>Category</label>

                                        <select name="productCategory" value={product.productCategory} onChange={handleproductchange}>
                                            <option value="">Select Category</option>
                                            {categories.map((category) => (
                                                <option key={category._id} value={category.category}>{category.category}</option>
                                            ))}
                                        </select>

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
                                <ToastContainer />
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