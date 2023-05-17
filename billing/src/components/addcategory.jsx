import React, { useState } from "react";
import { Modal, Button, ModalBody, ModalFooter, Container, Row, Col } from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Preloader from "./loader";

const AddCategory = ({ setCategories, fetchCategories, modalstatus, setmodalstatus }) => {


    const [newcategory, setnewcategory] = useState(' ');
    const [isloading, setisloading] = useState(false);


    const handlechange = (event) => {
        const { value } = event.target;
        setnewcategory(value)
        console.log(value);
    }

    const addcategory = async (e) => {

        e.preventDefault();
        console.log(newcategory);
        setisloading(true);

        try {

            const status = await axios.post('http://localhost:4000/addcategory', { categories: newcategory })
            const result = status.data.result;

            if (!newcategory) {
                toast.error('News Category is Empty')
            }
            if (result == false) {
                toast.error("Category Exists");
            }
            else {
                fetchCategories();
                toast.success('Category Added');
                setmodalstatus(false);
            }

        } catch (error) {

        }
        finally {
            setisloading(false);
        }

        // try {
        //     const addcategory = await axios.post('http://localhost:4000/addcategory', { newcategory });
        //     if (addcategory) {
        //         toast.success('Category Added');
        //     }

        // } catch (error) {
        //     toast.error('System Error');
        // }
        // finally {
        //     setisloading(false);
        // }


    }

    const closemodal = () => {
        setmodalstatus(false);
    }

    const openmodal = () => {
        setmodalstatus(true);
    }


    return (
        <>
            <><div className="category-modal">

                <Modal show={modalstatus} onHide={closemodal} >
                    <Modal.Header>
                        <h6>Add Category</h6>
                    </Modal.Header>
                    <ModalBody>

                        <div className="add-category-form">
                            <form >
                                <label>Category Name</label>
                                <input type="text" name="categoryname" value={newcategory} onChange={handlechange} />
                                <button className="category-modal-button" onClick={addcategory}> Add </button>
                            </form>

                        </div>
                    </ModalBody>
                </Modal>
                {isloading && <Preloader />}
                <ToastContainer />

            </div >

            </>


        </>
    )
}

export default AddCategory;