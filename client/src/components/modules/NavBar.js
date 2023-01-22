import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="NavBar-container ">
            <div className="NavBar-linkContainer u-inlineBlock">
                <Link to="/feed/" className="NavBar-link">
                    Feed
                </Link>
                <Link to="/explore/" className="NavBar-link">
                    Explore
                </Link>
                <Link to="/" className="NavBar-logo NavBar-link "> </Link>
            </div>
            {/* <div className="NavBar-logo u-inlineBlock">
                <a href="/">
                    <img src="../../public/logo.png"/>
                </a>
            </div> */}
        </nav>
    );
};

export default NavBar;