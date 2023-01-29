import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import pfp from "../../public/profile.png";

/**
 * Proptypes
 * @param {string} creator_id
 * @param {string} creator_name
 */

const PostHeader = (props) => {

    return (
        <div className="Card-CreatorContainer">
            <div className="Card-pfp">
                <a href="/login" >
                    <img src={pfp}/>
                </a>
            </div>
            <div className="Card-user">
                <Link to={`/profile/${props.creator_id}`} className="u-link u-bold u-inlineblock">
                    {props.creator_name}
                </Link>
            </div>
        </div>

    );
};
export default PostHeader;