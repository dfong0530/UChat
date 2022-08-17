import "./CSS/Friends.css";
import PersonIcon from '@mui/icons-material/Person';

const handleFriend = ({socket, user}) => {
    socket.emit('join-room', {_id: user._id, name: user.name, 
    inUkraine: user.inUkraine}); 
};

const handleSwitch = async({socket, aFriend, user, room, GetRoomData}) => {
    aFriend.roomID === room.roomID ? "light" : "regular";
    const ret = await GetRoomData(aFriend.roomID, user.username, user.password);
    socket.emit('leave-room', room.room);
    socket.emit('switch-room', ret.room); 
    setRoom(ret); 
};

//When your calling this function make sure that thre is more than one
//friend. --> Could cause bugs if coditions aren't met
const getFriendName = ({user, room}) => {
    let friendName = user.friends.filter(aFriend => {
        return aFriend.roomID === room.roomID
    }); 
    return friendName[0];
};

const getFriendLocation = () => {

};

const Friends = ({roomID, name}) => {
    return (
        <div className="single-friend">
                <div className="profile-pic">
                    <PersonIcon
                        sx={{fontSize: 50}}
                    />
                </div>

                <p>
                    {name}
                </p> 
        </div>
    );
}; 

export default Friends; 
