import "./CSS/Friends.css";
import {useContext} from "react";
import GlobalContext from "../GlobalContext";
import { GetRoomData } from "../Data/GetData";
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1 from "@mui/icons-material/PersonAddAlt1";

const Friends = ({socket, setInfo}) => {

    const {user, setUser, room, setRoom} = useContext(GlobalContext);

    // handler to sent data whenever the clicks on the add button 
    // to add a friend  
    const handleFriend = () => {
        socket.emit('join-room', {userID: user._id, name: user.name, 
        inUkraine: user.inUkraine, location: user.location}); 
    };

    // handler for when the user wants to switch chatting rooms to another friend 
    // information regarding the user will be sent to the backend and then 
    // the eventlistener will handle updating the views 
    const handleSwitch = async(aFriend) => {
        const ret = await GetRoomData(aFriend.roomID, user.username, user.password);
        const userTwo = ret.userTwo;

        if(userTwo._id !== user._id && userTwo.name !== aFriend.name){
            let friends = user.friends;

            friends = friends.map(friend => {
                if(friend.roomID === aFriend.roomID){
                    friend.name = userTwo.name;
                    friend.location = userTwo.location;

                    setInfo({ name: userTwo.name, location: userTwo.location })
                }
                return friend;
            });

            setUser({...user, friends});
        }
        delete ret.userTwo;

        socket.emit('leave-room', room.room);
        socket.emit('switch-room', ret.room); 
        setRoom(ret); 
    };

    return (
        <section className="sidebar">
            <div className="add-friend"> 
                <p>UChat</p>

                <PersonAddAlt1
                    className="add-button"
                    onClick={handleFriend}
                    sx={{fontSize: 45}}
                />
            </div> 

            <div className="friends">
                {   
                    user.friends.map(friend => {
                        return (
                            <div 
                                className={friend.roomID === room.roomID ? 
                                    "light" : "regular"}
                                onClick={() => handleSwitch(friend)}
                                key={friend.roomID}>
                                <div className="user-pic">
                                    <PersonIcon 
                                    sx={{fontSize: 30}} 
                                    />
                                </div>

                                <p>{friend.name}</p>
                            </div>
                        ); 
                    })
                }
            </div> 
        </section>
    );
}; 

export default Friends; 
