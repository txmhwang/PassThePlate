import { get, post } from "../../utilities";
import React, { useState, useEffect } from "react";
import {FriendCard, ExistingFriendCard} from "../modules/FriendCard";

import "../modules/Feed.css";
/**
 * Proptypes
 * @param {(UserObject) => ()} AddFriend
 * @param {string} userId
 * @param {string} friends
 */

const Friends = (props) => {
    if (!props.userId) {
        return <div> Please login to view</div>
    }
    const [users, setUsers] = useState([]);

    useEffect(() => {
        get("api/users").then((data)=>{ setUsers(data);});
    });

    const AddFriend = (friendId) => {
        const updated=props.friends.concat(friendId)
        const body = {
            _id: props.userId,
            friends: updated,
        };
        post("/api/updateUser", body).then((response) => {
            console.log(response.data);
            props.friends = updated;
        })
        .catch((err)=>{console.error(err)});
    };

    const RemoveFriend = (friendId) =>{
        const ind = props.friends.indexOf(friendId);
        const updated = props.friends.splice(ind, 1);
        const body = {
            _id: props.userId,
            friends: updated,
        }
        post("/api/updateUser", body).then((response) => {
            console.log(response.data);
            props.friends = updated;
        })
        .catch((err)=>{console.error(err)});
    };

    let usersList = null;
    if (users.length === 0) {
        usersList = <div> No Users</div>
    } else {
        usersList = users.map((userObj) => {
            if (userObj._id !== props.userId && !(props.friends.includes(userObj._id) )){
                return(
                    <FriendCard 
                    friend = {userObj}
                    AddFriend = {AddFriend}
                    />
                );
            }
        
        });
    }

    let friendsList = null;
    if (props.friends.length===0){
        friendsList = <div>No friends yet</div>
    } else {
        friendsList = props.friends.map((friendid)=>{
            return(
                <ExistingFriendCard 
                friend_id = {friendid} 
                RemoveFriend={RemoveFriend}/>
            );
        });
    }

    return (
        <div>
            <h1 className="ExploreHeader"> ALL USERS </h1>
            <div className="FriendsContainer label"> 
            <h2>Add Friends</h2>
                <div className="FriendsContainer">{usersList}</div>
            </div>
            <div className="CurrentFriends label"> 
            <h2> Current Friends</h2>
                <div className="CurrentFriends">{friendsList}</div>
            </div>
        </div>
    );

};

export default Friends;