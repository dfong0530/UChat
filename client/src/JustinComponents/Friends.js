import "./CSS/Friends.css";
import {useContext} from "react";
import GlobalContext from "../GlobalContext";
import { GetRoomData } from "../Data/GetData";
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1 from "@mui/icons-material/PersonAddAlt1";

const Friends = ({socket}) => {

    const {user, setUser, room, setRoom} = useContext(GlobalContext);

    const handleFriend = () => {
        socket.emit('join-room', {_id: user._id, name: user.name, 
        inUkraine: user.inUkraine, location: user.location}); 
    };

    const handleSwitch = async(aFriend) => {
        const ret = await GetRoomData(aFriend.roomID, user.username, user.password);

        //ADDED below
        const userTwo = ret.userTwo;

        if(userTwo._id !== user._id && userTwo.name !== aFriend.name){
            let friends = user.friends;

            friends = friends.map(friend => {
                if(friend.roomID === aFriend.roomID){
                    friend.name = userTwo.name;
                    friend.location = userTwo.location;
                }
                return friend;
            });

            setUser({...user, friends});
        }

        delete ret.userTwo;
        //ADDED Above

        socket.emit('leave-room', room.room);
        socket.emit('switch-room', ret.room); 
        setRoom(ret); 
    };

    return (
        <section className="sidebar">
            <div className="add-friend"> 
                <p>
                    UChat   
                </p>

                <PersonAddAlt1
                    className="add-button"
                    onClick={handleFriend}
                    sx={{fontSize: 50}}
                />
            </div> 

            <div className="friends">
                {   
                    user.friends.map(friend => {
                        return (
                            <div className="single-friend"
                                onClick={() => handleSwitch(friend)}>
                                <div className="profile-pic">
                                    <PersonIcon 
                                    sx={{fontSize: 50}} 
                                    />
                                </div>

                                <p>
                                    {friend.name}
                                </p>
                            </div>
                        ); 
                    })
                }
            </div> 
        </section>
    );
}; 

export default Friends; 
