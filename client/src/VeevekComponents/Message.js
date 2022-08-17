import "./CSS/Message.css";

const Message = ({userID, _id, message, donation, donationAmount}) => { //DFONG --> Talk about modifications props, donation display logic, make it look more like figma
    return (
        <div className= {userID === _id ? "grey-msg" : "blue-msg"} >
            {donation && <p className="donate-msg">Donated ${donationAmount}</p>}
            <p>{message}</p>
        </div>
    );
}

export default Message;