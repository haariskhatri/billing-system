import { React, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';


const Billcard = ({ items, handleAddNew, handleChange, handleRemove, discount, shipping }) => {


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
        total = (parseFloat(subtotal) + parseFloat(shippingamount) - parseFloat(discountgiven)).toFixed(2);
    } else {
        total = (parseFloat(subtotal) + parseFloat(shippingamount)).toFixed(2);
    }

    const getamount = (quantity, price) => {
        if (quantity && price) {
            return quantity * price;
        }
        else {
            return 0;
        }
    }

    // const [items, setItems] = useState([{ itemName: '', itemQty: '', itemPrice: '' }]);

    // const handleChange = (event, index) => {
    //     const { name, value } = event.target;
    //     const updatedItems = [...items];
    //     updatedItems[index][name] = value;
    //     setItems(updatedItems);
    // };

    // const handleAddNew = () => {
    //     const newItem = { itemName: '', itemQty: '', itemPrice: '' };
    //     setItems([...items, newItem]);
    // };

    // const handleRemove = (index) => {
    //     const updatedItems = [...items];
    //     updatedItems.splice(index, 1);
    //     setItems(updatedItems);
    // };

    // const handleRemove = (index) => {
    //     const updatedItems = [...items];
    //     updatedItems.splice(index, 1);
    //     setItems(updatedItems);
    // };

    // const ItemNameChangeHandler = (event) => {
    //     const ItemName = event.target.value;
    //     props.itemchangehandler('ItemName', ItemName);
    // }

    // const ItemQtyChangeHandler = (event) => {
    //     const ItemQty = event.target.value;
    //     props.itemchangehandler('ItemQty', ItemQty);
    // }

    // const ItemPriceChangeHandler = (event) => {
    //     const ItemPrice = event.target.value;
    //     props.itemchangehandler('ItemPrice', ItemPrice);
    // }

    // const handleAddNew = () => {
    //     props.AddNewItem();
    // }


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
                                            name="barcode"
                                            value={item.barcode}
                                            onChange={(event) => handleChange(event, index)}
                                        />
                                    </td>
                                    <td className="item-name">
                                        <input
                                            type="text"
                                            name="itemName"
                                            value={item.itemName}
                                            onChange={(event) => handleChange(event, index)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="number"
                                            name="itemQty"
                                            value={item.itemQty}
                                            min="1"
                                            placeholder="0"
                                            onChange={(event) => handleChange(event, index)}
                                        />
                                    </td>

                                    <td>
                                        <input
                                            type="number"
                                            name="itemPrice"
                                            value={item.itemPrice}
                                            placeholder="0"
                                            onChange={(event) => handleChange(event, index)}
                                        />
                                    </td>
                                    <td>
                                        {parseFloat(item.itemQty) && parseFloat(item.itemPrice) ? (
                                            item.itemQty * item.itemPrice
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
                    <button onClick={handleAddNew} className="add-button"> Add Item </button>
                </div>

                <div className="subtotal-section">
                    <div className="row justify-content-end">
                        <div className="col-lg-3">
                            <div className="subtotal-items">
                                <div className="subtotal-parts">
                                    <ul className="list-unstyled">
                                        <li><span>Subtotal :</span> Rs.{subtotal} </li>
                                        <li><span>Tax      :</span> </li>
                                        <li><span>Shipping :</span> Rs.{shippingamount}</li>
                                        <li><span>Discount :</span> Rs.{discountgiven} </li>
                                    </ul>
                                    <ul className="list-unstyled subtotal-total">
                                        <li><span>Total :</span> Rs.{total} </li>
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