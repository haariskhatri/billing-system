import React from "react";
import DeliveryNote from "../components/createdeliverynote";
import SideMenu from "../components/sidemenu";

const DeliveryPage = () => {
    return (
        <>
            <div className="container-fluids">

                <div className="row">
                    <div className="col-md-3">
                        <SideMenu />
                    </div>
                    <div className="col-md-9">
                        <DeliveryNote />

                    </div>

                </div>

            </div>
        </>
    )
}

export default DeliveryPage;