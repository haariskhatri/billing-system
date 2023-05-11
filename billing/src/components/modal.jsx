import React, { useState } from 'react';
import { Modal, Button, ModalBody, ModalFooter, Container, Row, Col } from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';

const ScrollableModal = ({ items, shipping, discount, invoice }) => {
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

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
        if (discount && subtotal && shipping) {
            return (parseInt(subtotal) + parseInt(shipping)) - parseInt(discount);
        }
        else {
            return 0;
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
                                <h6>Haaris Khatri , Minddeft</h6>
                            </Col>
                            <Col lg={6}>
                                <div className="modal-amount">
                                    <h6>Amount : {total} </h6>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Header>
                <ModalBody>
                    <ReactBootstrap.Table>
                        <thead>
                            <tr>
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
                                        {item.itemPrice}
                                    </td>
                                    <td>
                                        {parseFloat(item.itemQty) && parseFloat(item.itemPrice) ? (
                                            item.itemQty * item.itemPrice
                                        ) : (
                                            0
                                        )}
                                    </td>

                                </tr>
                            ))}

                        </tbody>
                    </ReactBootstrap.Table>
                </ModalBody>
                <ModalFooter>

                    <ReactBootstrap.Container>
                        <ReactBootstrap.Row>
                            <ReactBootstrap.Col lg={6}>

                            </ReactBootstrap.Col>

                            <ReactBootstrap.Col lg={6}>
                                <div className="modal-totals">
                                    <ul className="list-unstyled">
                                        <li>Subtotal : {subtotal} </li>
                                        <li>Tax      : </li>
                                        <li>Shipping : {shipping} </li>
                                        <li>Discount : {discount}</li>
                                    </ul>

                                </div>
                                <div className="modal-final-total">
                                    <ul className="list-unstyled">
                                        <li>Total: {total}</li>
                                    </ul>
                                </div>
                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Container>
                    <Button variant='primary'>
                        Save and Print
                    </Button>
                </ModalFooter>
            </Modal>
        </div >

        </>
    );
};

export default ScrollableModal;
