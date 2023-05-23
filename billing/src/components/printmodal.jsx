import React, { useEffect, useState } from "react";
import { Modal, Button, ModalBody, ModalFooter, Container, Row, Col, ModalHeader } from 'react-bootstrap';
import logo from '../public/images/logo.png'


const PrintModal = ({ form, showmodal, setshowmodal }) => {



    const closemodal = () => {
        setshowmodal(false);
    }

    const [date, setdate] = useState('');

    useEffect(() => {
        const dateobj = new Date();
        const current_date = dateobj.getDate();
        const month = dateobj.getMonth() + 1;
        const year = dateobj.getFullYear();

        setdate(current_date + '/' + '0' + month + '/' + year);

    }, [])

    return (
        <>
            <Modal show={showmodal} onHide={closemodal} dialogClassName="print-modal">
                <ModalHeader>
                    <Container>
                        <div className="company-address">
                            <Row className="dealer-detail">
                                <Col lg={3}>
                                    <img src={logo}></img>
                                </Col>
                                <Col lg={9}>
                                    <div className="address-top">

                                        <p className="dealer-name">Man Motors Pvt Ltd</p>
                                        <p >Science City Ahmedabad</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </ModalHeader>

                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <p><span className="customer-to">Date :</span> {date}</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="customer-detail">
                                    <p className="customer-name"> <span className="customer-to">From :</span> Man Motors Pvt Ltd</p>
                                    <p className="customer-address">Science City</p>
                                    <p><span className="customer-to">City  :</span> Ahmedabad</p>
                                    <p><span className="customer-to">State :</span> Gujarat</p>
                                    <p><span className="customer-to">Pin Code :</span> 380 008</p>
                                    <p><span className="customer-to">Phone :</span> (+91) 9909899898</p>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="customer-detail">

                                    <p className="customer-name"> <span className="customer-to">To :</span> {form.customerName}</p>
                                    <p className="customer-address">{form.customerAddress}</p>
                                    <p><span className="customer-to">City  :</span> {form.customerCity}</p>
                                    <p><span className="customer-to">State :</span> {form.customerState}</p>
                                    <p><span className="customer-to">Pin Code :</span> {form.customerPincode}</p>
                                    <p><span className="customer-to">Phone :</span> (+91) {form.customerPhonenumber}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>

            </Modal>

        </>
    )
}

export default PrintModal;