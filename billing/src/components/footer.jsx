import React, { useState } from "react";

const Footer = (props) => {


    const noteshandler = (event) => {
        event.preventDefault();
        const newnote = event.target.value;
        props.notehandler('ItemNote', newnote);
    }


    return (
        <>
            <div className="row">
                <div className="bill-footer">
                    <h6>Notes</h6>
                    <input type="text" onChange={noteshandler} placeholder="Notes" />

                </div>

            </div>
        </>
    )

}

export default Footer;