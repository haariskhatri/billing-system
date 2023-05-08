import React from "react";
import '../App.css'

const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Billing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">History</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Log Out</a>
                </li>
            </ul>
        </>
    )
}

export default Navbar;