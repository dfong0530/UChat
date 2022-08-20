import "./CSS/Messages.css";
import io from "socket.io-client";
import Friends from "../JustinComponents/Friends.js";
import Message from "../VeevekComponents/Message.js";
import { GetRoomData } from "../Data/GetData";
import { useState, useEffect, useContext, useRef } from "react";
import GlobalContext from "../GlobalContext";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import DonationBox from "../TashiComponents/DonationBox";

const socket = io("http://localhost:5000");

const Messages = () => {
  const { user, setUser, room, setRoom } = useContext(GlobalContext);
  const [message, setMessage] = useState("");
  const [info, setInfo] = useState({ name: "", location: "" });
  const [donationBoxDisplay, setDonationBoxDisplay] = useState({donationBox: false, darkOverlay: false});

  //These are refs to make sure the input msg box is focused on refresh
  //and that the msg scrolls down when messages are sent
  const inputRef = useRef(null);
  const msgSecRef = useRef(null);

  // TASHI
  const handleDonation = () => {
    setDonationBoxDisplay({ donationBox: true, darkOverlay: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit("message", {userID: user._id, roomID: room.roomID, message: message, roomNum: room.room, donation: false, donationAmount: 0});
    setMessage("");
  };

  useEffect(() => {
    console.log("Heyyy");
    user.friends.map((aFriend) => {
      if (aFriend.roomID === room.roomID) {
        console.log(aFriend.name, aFriend.location);
        setInfo({ name: aFriend.name, location: aFriend.location });
      }
      return aFriend;
    });
  }, [room, user.friends]);

  //When web page loads focus the cursor on the input message box.
  //If the user has friends join the room of the first friend
  useEffect(() => {
    inputRef.current.focus();
    if (user.friends.length !== 0) {
      socket.emit("switch-room", room.room);
    }
  }, [room.room, user.friends.length]);

  //Every time messages are added make sure it automatically scrolls to bottom.
  useEffect(() => {
    msgSecRef.current.scrollTop = msgSecRef.current.scrollHeight;
  }, [room]);

  useEffect(() => {
    /* This is where I will adding socket event listeners. 

            These even listeners will help me send data from the backend to
            the frontend. Once the data is retrieved on the front end state variables will be updated
            accordingly 


            EMIT ACTIONS: --> socket.emit(action, params)

            1. 'join-room', { userID: string, name: string, inUkraine: bool } 
            --> Used when user wants a new friend

            2. 'switch-room', room: string 
            --> Used when user switches to differnt friend (In the backend it switches the socket.io room)

            3. 'leave-room', room: string 
            --> Used before you write before you call switch room. MUST LEAVE ROOM BEFORE JOINING NEW ROOM

            4. 'message' { userID: string, roomID: string, message: string, roomNum: string, donation: bool, donationAmount: int } 
            --> USED WHEN NEW MESSAGE ENTERED
        */

    //Sent from Backend --> After backend finishes procesing adding a new room
    //The website should add a new friend to the top of the side bar
    const joinRoomHandler = async ({friendName, roomID, roomNum, location}) => {
      socket.emit("leave-room", room.room);
      socket.emit("switch-room", roomNum);

      let incomingFriend = { roomID: roomID, name: friendName, location: location};
      let newFriends = user.friends;
      newFriends.unshift(incomingFriend);
      setUser({ ...user, friends: newFriends });

      const ret = await GetRoomData(roomID, user.username, user.password);

      delete ret.userTwo;
      setRoom(ret);
    };

    //Sent from Backend --> After backend finishes procesing adding a new message
    //The website should add a mesage to the screen
    const messageHandler = ({ userID, message, _id, donation, donationAmount}) => {
      let incomingMessage = { _id: _id, userID: userID, message: message, donation: donation, donationAmount: donationAmount};
      let newMessages = room.messages;
      newMessages.push(incomingMessage);
      setRoom({ ...room, messages: newMessages });
    };

    //Sent from Backend --> After second user wants to add a friend.
    //First user updates friendUsername The website should update anonymous
    // with new username
    const friendJoinedHandler = ({ name, roomID, location }) => {
      let updatedUserFriend = user.friends;
      updatedUserFriend.map((friend) => {
        if (friend.roomID === roomID) {
          friend.name = name;
          friend.location = location;

          setInfo({ name: name, location: location });
        }
        return friend;
      });
      setUser({ ...user, friends: updatedUserFriend });
    };

    //Update user, make api request to update currentMessages
    socket.on("join-room", joinRoomHandler);

    socket.on("message", messageHandler);

    socket.on("friend-joined", friendJoinedHandler);

    return () => {
      socket.off("join-room", joinRoomHandler);
      socket.off("message", messageHandler);
      socket.off("friend-joined", friendJoinedHandler);
    };
  }, [room, setRoom, setUser, user]);

  return (
    <>
      <section className="page">
        <Friends socket={socket} setInfo={setInfo}/>

        <div className="main">
          <div className="header">
            <section className="information">
              {/*the profile picture */}
              <div className="profile-pic">
                <PersonIcon
                  className="icon"
                  sx={{
                    color: "white",
                    fontSize: 40,
                  }}
                />
              </div>

              <div className="name-location">
                <p className="id">{info.name}</p>

                <p className="location">{info.location}</p>
              </div>
            </section>

            {/* this is the donate button for TASHI*/}
            <button className="donate" onClick={handleDonation}>
              Donate Now
            </button>
          </div>

          <div className="messages-chat" ref={msgSecRef}>
            {room.messages.map((msg) => {
              return (
                <div key={msg._id} className="message">
                  <Message
                    userID={msg.userID}
                    _id={user._id}
                    message={msg.message}
                    donation={msg.donation}
                    donationAmount={msg.donationAmount}
                  />
                </div>
              );
            })}
          </div>

          <form className="message-input" onSubmit={handleSubmit}>
            <input
              type="text"
              className="message-box"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              ref={inputRef}
            />
            <div className="enter-button" onClick={handleSubmit}>
              <SendIcon
                sx={{
                  color: "white",
                  fontSize: 25,
                }}
              />
            </div>
          </form>
        </div>
      </section>
      {donationBoxDisplay.darkOverlay && <div className="dark-overlay"></div>}
      {donationBoxDisplay.donationBox && <DonationBox setDonationBoxDisplay={setDonationBoxDisplay} socket={socket} />}
    </>
  );
};

export default Messages;
