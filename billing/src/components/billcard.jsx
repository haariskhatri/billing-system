import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';


const Billcard = () => {

    return (
        <>
            <div className="bill-board">
                <div className="bill-top">
                    {/* <div className="row">
                        <div className="col-lg-9">
                            <ul className="list-unstyled">
                                <li>Item</li>
                            </ul>

                        </div>
                        <div className="col-lg-3">
                            <ul className="list-unstyled">
                                <li>Qty</li>
                                <li>Price</li>
                                <li>Action</li>
                            </ul>
                        </div>
                    </div> */}

                    <table className="table">
                        <thead>
                            <th>Qty</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="item-name"><input type="text" name="item-name" placeholder="Item Name" /></td>
                                <td><input type="number" name="item-qty" placeholder="Qty" min="0" /></td>
                                <td><input type="number" name="item-price" placeholder="Price" /></td>
                                <td><button><DeleteForeverIcon /></button></td>
                            </tr>
                        </tbody>

                    </table>
                    <button className="add-button"> Add Item </button>
                </div>

                <div className="subtotal-section">
                    <div className="row justify-content-end">
                        <div className="col-lg-4">
                            <div className="subtotal-items">
                                <div className="subtotal-parts">
                                    <ul className="list-unstyled">
                                        <li>Subtotal : </li>
                                        <li>Tax      : </li>
                                    </ul>
                                </div>
                                <ul className="list-unstyled">
                                    <li>Total:</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}

export default Billcard;