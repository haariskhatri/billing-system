import React from "react";

const AddressBar = ({ handlebillerchange, biller }) => {


    return (
        <>
            <div className="address-box">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bill-inner">
                            <h6>Bill To : </h6>
                            <div className="input-group">
                                <label>To : </label>
                                <input type="text" name="nameto" placeholder="Invoice For" value={biller.nameto} onChange={handlebillerchange} />
                            </div>
                            <div className="input-group">
                                <label> Email : </label> <input type="emailto" name="email" placeholder="Email Address " value={biller.emailto} onChange={handlebillerchange} />
                            </div>

                            <div className="input-group">
                                <label>Phone :</label>
                                <input type="number" name="phoneto" placeholder="Phone" value={biller.phoneto} onChange={handlebillerchange} />
                            </div>

                            <div className="input-group">
                                <label>City : </label><input type="text" name="cityto" placeholder="City" value={biller.cityto} onChange={handlebillerchange} />
                            </div>

                            <div className="input-group">
                                <label>Address :</label><textarea name="addressto" placeholder="Address" value={biller.addressto} onChange={handlebillerchange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddressBar;