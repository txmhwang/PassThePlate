import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="NavBar-container ">
            <div className="NavBar-logo u-inlineBlock">
                <a href="link address">
                    <img src=""/>
                </a>
            </div>
            <div className="NavBar-linkContainer u-inlineBlock">
                <Link to="/" className="NavBar-link">
                    Home
                </Link>
                <Link to="/feed/" className="NavBar-link">
                    Feed
                </Link>
                <Link to="/explore/" className="NavBar-link">
                    Explore
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;