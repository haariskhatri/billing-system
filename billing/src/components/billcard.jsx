import { React, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";



const Billcard = ({ items, handleAddNew, handleChange, handleRemove, discount, shipping, handleproduct }) => {

    const [nameerror, setnamerror] = useState(false);

    const getproduct = async (event, index) => {
        const barcode = items[index]["itemBarcode"];
        const product = await axios.get(`http://localhost:4000/getproduct/${barcode}`)
        handleproduct(product, index);
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
    const discountgiven = (discount) || 0;
    const shippingamount = (shipping) || 0;
    let total;
    if (parseFloat(discountgiven)) {
        total = (parseFloat(subtotal) + parseFloat(shippingamount) - parseFloat(discountgiven)).toFixed(2).toLocaleString();
    } else {
        total = (parseFloat(subtotal) + parseFloat(shippingamount)).toFixed(2);
    }

    total = addCommasToNumber(total);

    function addCommasToNumber(number) {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(number);
    }

    const getamount = (quantity, price) => {
        if (quantity && price) {
            return quantity * price;
        }
        else {
            return 0;
        }
    }

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
                    <div className="table-responsive">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Code</th>
                                    <th>Item</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td> {/* Barcode input field */}
                                            <input
                                                type="text"
                                                name="itemBarcode"
                                                value={item.itemBarcode}
                                                onBlur={(event) => {
                                                    getproduct(event, index);
                                                }}
                                                className={item.itemBarcode ? '' : 'input-error'}
                                                onChange={(event) => handleChange(event, index)}
                                            />
                                        </td>
                                        <td className="item-name">
                                            <input
                                                type="text"
                                                name="itemName"
                                                value={item.itemName}
                                                className={item.itemName ? '' : 'input-error'}
                                                onChange={(event) => { handleChange(event, index) }}
                                                readOnly
                                            />
                                            {item.itemName ? <></> : <p> Can't be empty.</p>}
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                name="itemQty"
                                                value={item.itemQty}
                                                min="1"
                                                placeholder="0"
                                                className={item.itemQty ? '' : 'input-error'}
                                                onChange={(event) => handleChange(event, index)}
                                            />
                                            {item.itemQty ? <></> : <p>Item Quantity can't be empty.</p>}
                                        </td>

                                        <td>
                                            <input
                                                type="number"
                                                name="itemPrice"
                                                value={item.itemPrice}
                                                placeholder="0"
                                                className={item.itemPrice ? '' : 'input-error'}
                                                onChange={(event) => handleChange(event, index)}
                                            />
                                        </td>
                                        <td>
                                            {parseFloat(item.itemQty) && parseFloat(item.itemPrice) ? (
                                                new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.itemQty * item.itemPrice)
                                            ) : (
                                                0
                                            )}
                                        </td>

                                        <td>
                                            <button onClick={() => handleRemove(index)}>
                                                <DeleteForeverIcon />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                    <button onClick={handleAddNew} className="add-button"> Add Item </button>
                </div>

                <div className="subtotal-section">
                    <div className="row justify-content-end">
                        <div className="col-lg-3">
                            <div className="subtotal-items">
                                <div className="subtotal-parts">
                                    <ul className="list-unstyled">
                                        <li><span>Subtotal :</span> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(subtotal)} </li>
                                        <li><span>Tax      :</span> </li>
                                        <li><span>Shipping :</span> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(shippingamount)}</li>
                                        <li><span>Discount :</span> {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(discountgiven)} </li>
                                    </ul>
                                    <ul className="list-unstyled subtotal-total">
                                        <li><span>Total :</span>{total}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}

export default Billcard;