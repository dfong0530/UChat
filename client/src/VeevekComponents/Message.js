import "./CSS/Message.css";

const Message = ({userID, _id, message, donation, donationAmount}) => { 
    return (
        <div className= {userID === _id ? "grey-msg" : "blue-msg"} >
<<<<<<< HEAD
            <p className= {donation && <p>{donationAmount}</p>}></p>
            {donation && <p className="donate-msg">Donated ${donationAmount}</p>}
            <p>{message}</p>
=======
            {donation && <p className="donate-msg">Donated ${donationAmount}</p>}


>>>>>>> 934760b531d4b4020eb8311c4431db60b50eced6
            <p className="word">
                {message}
            </p>
        </div>
    );
}

export default Message;