import "./CSS/Message.css";
import React, { useState, useEffect } from 'react';

const Message = (props) => {
    const{userID, _id, message, donation, donationAmount} = props;
    return (
        <div className= {userID === _id ? "grey-msg" : "blue-msg"} >
            <p className={donation && <p>{donationAmount}</p>}></p>
            <p>I believe in you. </p>
        </div>
        
    );
}

export default Message;