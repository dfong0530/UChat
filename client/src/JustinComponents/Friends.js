import "./CSS/Friends.css";
import PersonIcon from '@mui/icons-material/Person';


const Friends = ({roomID, name}) => {

    const handleSwitch = () => {

    }


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