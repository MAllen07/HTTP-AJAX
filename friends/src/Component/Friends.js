import React from 'react'; 




const Friends = props => {
    return (
        <div className="friends">
            <h2> {props.item.name}</h2>
                 <h2>{props.item.age} </h2>
                 <h2>{props.item.email} </h2>
        
        </div>
     
        );
}

export default Friends;