import React, { useState, useEffect } from "react";
import "./Homepage.css";

const Homepage = () => {
    return (
        <>
            <div className="homepage-container">
                <h1 className="homepage-title">
                    <div className="plate-background">
                        <div className="plate-left"></div>
                        <div className="plate-right"></div>
                    </div>
                    PASS THE PLATE
                </h1>

                {/* <div className="rightsideplate">
                    <img src="../../public/plate_left.png" />
                </div>

                <div className="leftsideplate">
                    <img src="../../public/plate_left.png" />
                </div> */}
            </div>
        </>
        
    );
}

export default Homepage;