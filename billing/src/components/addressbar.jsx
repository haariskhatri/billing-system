import React from "react";

const AddressBar = (props) => {





    return (
        <>
            <div className="address-box">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bill-inner">
                            <h6>Bill To : </h6>
                            <div className="input-group">
                                <label>To : </label>
                                <input type="text" name="to" placeholder="Invoice For" />
                            </div>
                            <div className="input-group">
                                <label> Email : </label> <input type="email" name="email" placeholder="Email Address " />
                            </div>

                            <div className="input-group">
                                <label>Phone :</label>
                                <input type="number" name="phonenumber" placeholder="Phone" />
                            </div>

                            <div className="input-group">
                                <label>Address :</label><textarea name="address" placeholder="Address" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressBar;