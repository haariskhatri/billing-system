import React, { useState } from "react";
import { Modal, Button, ModalBody, ModalFooter, Container, Row, Col } from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Preloader from "./loader";

const AddCategory = () => {

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