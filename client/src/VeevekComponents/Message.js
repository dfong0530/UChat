import "./CSS/Message.css";

const Message = ({userID, _id, message, donation, donationAmount}) => { 
    return (
        <div className= {userID === _id ? "grey-msg" : "blue-msg"} >
            <p className= {donation && <p>{donationAmount}</p>}></p>
            {donation && <p className="donate-msg">Donated ${donationAmount}</p>}
            <p>{message}</p>
            <p className="word">
                {message}
            </p>
        </div>
    );
}

export default Message;