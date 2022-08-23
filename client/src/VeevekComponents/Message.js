import "./CSS/Message.css";

const Message = ({userID, _id, message, donation, donationAmount}) => { 
    return (
        <div className= {userID === _id ? "grey-msg" : "blue-msg"} >
<<<<<<< HEAD
            <p className= {donation && <p>{donationAmount}</p>}></p>
=======
            {donation && <p className="donate-msg">Donated ${donationAmount}</p>}
<<<<<<< HEAD
>>>>>>> 27c23b80e6301a53bfafdb1fcc9412ce8e82b304
            <p>{message}</p>
=======
            <p className="word">
                {message}
            </p>
>>>>>>> 391ae54790f864953acf14217642e174e425b808
        </div>
    );
}

export default Message;