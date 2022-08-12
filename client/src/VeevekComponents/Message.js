import "./CSS/Message.css";
import React, { useState, useEffect } from 'react';

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,600&family=Roboto:wght@400;500;700&display=swap');
</style>

const Message = (props) => {
    const{userID, _id, message} = props;
    return (
        //{userID === _id ? "grey-msg":"blue-msg"}
        <div className= "message" >
            <p>My family has been living in Ukraine ever since I was born.</p>
        </div>
    );
}

export default Message;