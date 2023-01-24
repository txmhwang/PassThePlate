import React from "react";
import { Link } from "react-router-dom";

/**
 * Proptypes
//  * @param {string} comment_id
 * @param {string} creator_id
 * @param {string} creator_name
 * @param {string} content
 * @param {number} rating
 * @param {number} hours
//  * @param {boolean} helpful (not yet implemented)
 * @param {string} picture (optional, not yet implemented)
 */

const SingleComment = (props) => {
    return (
        <div className="Comment-container">
            <div className="CommentCreator-container">
                <Link to={`/profile/${props.creator_id}`} className="u-link u-bold">
                    {props.creator_name}
                </Link>
                <div>
                    Rating: {props.rating}
                    Time to make recipe: {props.hours}
                </div>
                <p className="commentContent-container">{props.content}</p>
            </div>
        </div>

    );
};

export default SingleComment;