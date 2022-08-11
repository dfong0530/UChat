import "./CSS/Messages.css";
import io from 'socket.io-client';
import { GetRoomData } from "../Data/GetData";
import {useState, useEffect, useContext, useRef} from "react"
import GlobalContext from "../GlobalContext";
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';


const socket = io();

const Messages = () => {

    const {user, setUser, room, setRoom} = useContext(GlobalContext);
    const [message, setMessage] = useState({_id: "", userID: "", text: ""})

    //These are refs to make sure the input msg box is focused on refresh
    //and that the msg scrolls down when messages are sent
    const inputRef = useRef(null);
    const msgSecRef = useRef(null);
    

    //When web page loads focus the cursor on the input message box.
    //If the user has friends join the room of the first friend
    useEffect(() => {
        inputRef.current.focus();
        if(user.friends.length !== 0){

            socket.emit('switch-room', room.room);
        }
    }, [room.room, user.friends.length]);


    //Every time messages are added make sure it automatically scrolls to bottom.
    useEffect(() => {
        msgSecRef.current.scrollTop = msgSecRef.current.scrollHeight;
    }, [room])


    useEffect(() => {
         /* This is where I will adding socket event listeners. 

            These even listeners will help me send data from the backend to
            the frontend. Once the data is retrieved on the front end state variables will be updated
            accordingly 


            EMIT ACTIONS: --> socket.emit(action, params)

            1. 'join-room', { userID: string, username: string, inUkraine: bool } 
            --> Used when user wants a new friend

            2. 'switch-room', room: string 
            --> Used when user switches to differnt friend (In the backend it switches the socket.io room)

            3. 'leave-room', room: string 
            --> Used before you write before you call switch room. MUST LEAVE ROOM BEFORE JOINING NEW ROOM

            4. 'message' { userID: string, roomID: string, message: string, roomNum: string, donation: bool, donationAmount: int } --> USED WHEN NEW MESSAGE ENTERED

            

            ret = API request
          
            socekt.emit('leave-room', room.room)
            socke.emit('switch-room', newRoom);

             setRoom(ret)


            handleAddUsre = () => {
                socket.emit('join-room', {userID: user._id, username: user.username});
            }

        
        */
        
        //Sent from Backend --> After backend finishes procesing adding a new room 
        //The website should add a new friend to the top of the side bar
        const joinRoomHandler = async({friendUsername, roomID, roomNum}) => {
        }

        //Sent from Backend --> After backend finishes procesing adding a new message
        //The website should add a mesage to the screen
        const messageHandler = ({userID, message, _id, donation, donationAmount}) => {
            const ret = GetRoomData();
            const msg = {_id: message._id, userID: message.userID, text: message.text};
            
            if (message._id && message.userID && message.text) {
                socket.emit('message', msg);
                setMessage({ret}); 
                setRoom([...room, [...message, message.text]]); 
                setMessage({...message, text: ""}); 
            } 
            return {room}; 
        }

        //Sent from Backend --> After second user wants to add a friend. First user updates friendUsername
        //The website should update anonymous with new username
        const friendJoinedHandler = ({username, roomID}) => {

        }
        

        //Update user, make api request to update currentMessages
        socket.on('join-room', joinRoomHandler);

        socket.on('message',messageHandler);

        socket.on('friend-joined', friendJoinedHandler);


        return () => {
            socket.off('join-room', joinRoomHandler);
            socket.off('message',messageHandler);
            socket.off('friend-joined', friendJoinedHandler)
        }

    }, [room, setRoom, setUser, user]);

    return (
        <> 
            {/* a css grid that represents the whole page */}
            <section className="page">
                {/* the side part of the page that displays
                 the add friend button along with the friends */}
                <div className="sidebar">
                    {/* the add feature of the side */}
                    <div className="add-friend">
                        {/* the app name */}
                        <p>
                            UChat
                        </p>

                        <PersonAddAlt1Icon 
                            className="add-button"
                            sx={{fontSize: 60}}
                        />
                    </div>

    
                    {/* the friends feature of the side */}
                    <div className="friends">
                        {/* there is a friend with a profile pic and their name */}
                        {
                            <div className="single-friend">
                                <div className="profile-pic">
                                    <PersonIcon
                                        sx={{fontSize: 50}}
                                    />
                                </div>

                                <p>
                                    Sarah
                                </p> 
                            </div>
                        }
                    </div>
                </div>


                {/* now for the main part of the messages page 
                that includes the head, the chat UI, and the 
                messages input feature */}
                <div className="main">
                    <div className="header">
                        {/* the information regarding the friend w/
                        their profile picture, where they are from 
                        and their name */}
                        <section className="information">
                            {/* the profile picture */}
                            <div className="profile-pic">
                                <PersonIcon 
                                    className="icon"
                                    sx={{
                                        color: "white", 
                                        fontSize: 50
                                    }}
                                />
                            </div>
                            
                            {/* for the name and location */}
                            <div className="name-location">
                                <p className="id">
                                    Veevek
                                </p>

                                <p className="location">
                                    From Kyiv
                                </p>
                            </div>
                        </section>
                        
                        {/* this is the donate button */}
                        <button className="donate"> 
                            Donate Now 
                        </button>
                    </div>



                    {/* the CHAT PART */}
                    <div className="messages-chat" ref={msgSecRef}>




                    </div>
                    

                    {/* THE INPUT PART WHERE YOU COLLECT THE DATA AND 
                    MANIPULATE IT*/}
                    <form className="message-input">
                        <input 
                            type="text"
                            className="message-box"
                            placeholder="Type your message here..."
                            value={message.text}
                            onChange={(e) => setMessage(e.target.value)}
                            ref={inputRef}
                        />
                        <div className="enter-button">
                            <SendIcon 
                                sx={{
                                    color: "white", 
                                    fontSize: 30 
                                }}
                            />
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Messages;