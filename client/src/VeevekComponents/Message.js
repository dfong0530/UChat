import "./CSS/Message.css";
import React, { useState, useEffect } from 'react';

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,600&family=Roboto:wght@400;500;700&display=swap');
</style>

const Message = (props) => {
    const{userID, _id, message, action, action_id} = props;
    return (
        <div className= {userID === _id ? "grey-msg" : "blue-msg"} >
            <p className= {action === action_id ? "donate-msg" : "no-msg"}>Donated $100</p>
            <p>I believe in you. </p>
        </div>
    );
}

export default Message;