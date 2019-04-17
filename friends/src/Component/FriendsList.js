import React from "react";
import Friends from "./Friends";

const FriendsList = props => {

    
    return (
        <div className ="friends-list">
           {props.friends.map(item => (
              <Friends
              key={item.id}
              item={item}
              /> 
           ))}

        </div>
     
        )
    };

    export default FriendsList;