import "./CSS/Friends.css";
import PersonIcon from '@mui/icons-material/Person';


const Friends = (props) => {
    const {roomID, name} = props.friend; 
    return (
        <div className="single-friend" onClick={handleSwitch}>
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