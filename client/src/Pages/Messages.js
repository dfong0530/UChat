import "./CSS/Messages.css";
import io from 'socket.io-client';
// import user from "../App.js"
import {useEffect, useContext} from "react"
import GlobalContext from "../GlobalContext";

import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { useSearchParams } from "react-router-dom";


const socket = io();

const Messages = () => {
    // const [users, setUsers] = useState([]); 

    const handleClick = () => {

    }

    useEffect(() => {
        /* This is where I will adding socket event listeners. 

            ALL you need to know is that these even listeners will help me send data from the backend to
            the frontend. Once the data is retrieved on the front end state variables will be updated
            accordingly 
        */
    })


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
                    <div className="messages-chat">




                    </div>
                    

                    {/* THE INPUT PART WHERE YOU COLLECT THE DATA AND 
                    MANIPULATE IT*/}
                    <form className="message-input">
                        <input 
                            className="message-box"
                            placeholder="Type your message here..."
                        />
                        <div className="enter-button">
                            <SendIcon 
                                sx={{
                                    color: "white", 
                                    fontSize: 30 
                                }}
                                onClick={handleClick}
                            />
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Messages;