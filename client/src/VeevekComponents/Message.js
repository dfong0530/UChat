import "./CSS/Message.css";

const Message = ({userID, _id, message, donation, donationAmount}) => { //DFONG --> Talk about modifications props, donation display logic, make it look more like figma
    return (
        <div className= {userID === _id ? "grey-msg" : "blue-msg"} >
<<<<<<< HEAD
            <p className= {donation && <p>{donationAmount}</p>}></p>
=======
            {donation && <p className="donate-msg">Donated ${donationAmount}</p>}
>>>>>>> 27c23b80e6301a53bfafdb1fcc9412ce8e82b304
            <p>{message}</p>
        </div>
    );
}

export default Message;