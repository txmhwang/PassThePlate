import React, { useState, useEffect } from "react";
import PostHeader from  "./PostHeader";
import { get, post } from "../../utilities";

import "./Card.css";
/**
 * Component to render an online user
 *
 * Proptypes
 * @param {(UserObject) => ()} AddFriend function that takes in user,
 *  sets it to active
 * @param {UserObject} friend
 */
const FriendCard = (props) => {
    return(
        <div className="Card-Usercontainer">
            <div>
                <PostHeader 
                creator_id = {props.friend._id}
                creator_name = {props.friend.name}
                />
            </div>
            <button 
            className="Card-FriendButton"
            onClick={()=> {props.AddFriend(props.friend._id)}}
            >
                Add Friend
            </button>
        </div>
    );
};

const ExistingFriendCard = (props) => {
    const [friend, setFriend] = useState({});
    useEffect(() => {
        get("api/getUser", {_id: props.friend_id}).then((friend)=>{ setFriend(friend);});
    });
    return(
        <div className="Card-Usercontainer">
            <div>
                <PostHeader 
                creator_id = {friend._id}
                creator_name = {friend.name}
                />
            </div>
            <button 
            className="Card-FriendButton"
            onClick={()=> {props.RemoveFriend(props.friend_id)}}
            >
                Remove Friend
            </button>
        </div>
    );
}
export { FriendCard, ExistingFriendCard };