import React from "react";

const AddressBar = () => {
    return (
        <>
            <div className="address-box">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bill-inner">
                            <h6>Bill To : </h6>
                            <input type="text" name="to" placeholder="Invoice For" />
                            <input type="email" name="email" placeholder="Email Address " />
                            <input type="text" name="address" placeholder="Address" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bill-inner">
                            <h6>Bill From : </h6>
                            <input type="text" name="from" placeholder="From" />
                            <input type="email" name="emailfrom" placeholder="Email Address " />
                            <input type="text" name="addressfrom" placeholder="Address" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressBar;