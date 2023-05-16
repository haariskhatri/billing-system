import React from "react";

const Preloader = () => {
    return (
        <>
            <div className="preloader-overlay">

                <div class="typewriter">
                    <div class="slide"><i></i></div>
                    <div class="paper"></div>
                    <div class="keyboard"></div>
                </div>
            </div>
        </>
    )
}

export default Preloader;