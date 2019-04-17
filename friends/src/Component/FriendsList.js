import React from "react";
import Friends from "./Friends";

class FriendsList extends React.Component {


    
    render() {
        return (
          <div className="Friends-List">
           
            {this.state.friends.map(friend => (
              <Friends friend={friend} key={friend.id} />
            ))}
          </div>
        );
      }

    };

    export default FriendsList;