import React, { useEffect, useState } from 'react';
import { Modal, Button, ModalBody, ModalFooter, Container, Row, Col } from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';


const ScrollableModal = ({ items, shipping, discount, invoice, biller }) => {
    const [showModal, setShowModal] = useState(false);


    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const printpdf = () => {

    }

    const calculateSubtotal = () => {
        let subtotal = 0;
        items.forEach((item) => {
            const itemQty = parseFloat(item.itemQty) || 0;
            const itemPrice = parseFloat(item.itemPrice) || 0;
            subtotal += itemQty * itemPrice;
        });
        return subtotal;
    };

    const subtotal = calculateSubtotal();

    const gettotal = () => {
        if (discount && shipping) {
            return (parseInt(subtotal) + parseInt(shipping)) - parseInt(discount);
        }
        else if (subtotal && shipping) {
            return parseInt(subtotal) + parseInt(shipping)
        }
        else {
            return subtotal;
        }
    }

    const total = gettotal();



    return (
        <><div className="bill-modal">

            <Button onClick={handleModalOpen} className='review-button'>
                Review Invoice
            </Button>
            <Modal show={showModal} onHide={handleModalClose}
                dialogClassName="bill-modal-table"
            >
                <Modal.Header>
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <h6>Invoice Number : {invoice}</h6>
                                <h6>To : {biller.nameto}</h6>
                                <h6>Phone : {biller.phoneto}</h6>
                                <h6>Email : {biller.emailto}</h6>
                                <h6>City : {biller.cityto}</h6>
                                <h6>Address : {biller.addressto}</h6>

                            </Col>
                            <Col lg={6}>
                                <div className="modal-amount">
                                    <h6>Amount : {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(total)} </h6>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Header>
                <ModalBody>
                    <div className="table-responsive">

                        <ReactBootstrap.Table >
                            <thead>
                                <tr className='modal-headers'>
                                    <th>Serial</th>
                                    <th>Code</th>
                                    <th>Item</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (

                                    <tr key={index}>
                                        <td className="serial">{index + 1}</td>
                                        <td> {/* Barcode input field */}
                                            {item.itemBarcode}
                                        </td>
                                        <td className="item-name">
                                            {item.itemName}
                                        </td>
                                        <td>
                                            {item.itemQty}
                                        </td>

                                        <td>
                                            {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.itemPrice)}
                                        </td>
                                        <td className='text-end'>
                                            {parseFloat(item.itemQty) && parseFloat(item.itemPrice) ? (
                                                new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.itemQty * item.itemPrice)
                                            ) : (
                                                0
                                            )}
                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </ReactBootstrap.Table>
                    </div>
                    <ReactBootstrap.Row>
                        <ReactBootstrap.Col lg={8}>

                        </ReactBootstrap.Col>

                        <ReactBootstrap.Col lg={4}>
                            <div className="modal-totals">
                                <ul className="list-unstyled">
                                    <li><span>Subtotal :</span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(subtotal)} </li>
                                    <li><span>Tax      : </span></li>
                                    <li><span>Shipping :</span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(shipping)} </li>
                                    <li><span>Discount :</span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(discount)}</li>
                                </ul>

                                <ul className="list-unstyled modal-final-total">
                                    <li><span>Total:</span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(total)}</li>
                                </ul>
                            </div>

                        </ReactBootstrap.Col>
                    </ReactBootstrap.Row>
                    <Button variant='primary'
                        onClick={() => {
                            window.print()
                        }}
                    >
                        Save and Print
                    </Button>
                </ModalBody>
            </Modal>
        </div >

        </>
    );
};

export default ScrollableModal;
