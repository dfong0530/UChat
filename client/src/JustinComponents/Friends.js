import "./CSS/Friends.css";
import PersonIcon from '@mui/icons-material/Person';


const Friends = ({roomID, name}) => {
<<<<<<< HEAD

    const handleSwitch = () => {

    }


=======
>>>>>>> 96fa6bfcfd1ddb8ef1b18577fa581f914cf6f305
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