import React from "react";

const Preloader = () => {
    return (
        <>
            <div className="preloader-overlay">

                <div className="typewriter">
                    <div className="slide"><i></i></div>
                    <div className="paper"></div>
                    <div className="keyboard"></div>
                </div>
            </div>
        </>
    )
}

export default Preloader;