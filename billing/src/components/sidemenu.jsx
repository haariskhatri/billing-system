import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PrintIcon from '@mui/icons-material/Print';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import LogoutIcon from '@mui/icons-material/Logout';
import BillingLogo from '../../public/billinglogo.png'
import { NavLink } from "react-router-dom";


const SideMenu = () => {
    return (
        <>
            <div className="side-menu-items">

                <ul className="list-unstyled">
                    <li className="bill-logo">
                        <img src={BillingLogo} />
                        <span className="logo-name">Easy Bills</span>
                    </li>
                    <li> <NavLink to='/'> <DashboardIcon /> DashBoard </NavLink></li>
                    <li>
                        <NavLink to='/'>
                            <CurrencyRupeeIcon /> Billing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <PrintIcon /> Print Barcodes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/addproduct'>
                            <AddToPhotosIcon /> Add Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <LocalShippingIcon /> Create Delivery Note
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            <LogoutIcon /> Log Out
                        </NavLink>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default SideMenu;