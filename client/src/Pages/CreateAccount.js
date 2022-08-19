import "./CSS/CreateAccount.css";
import Message from "../VeevekComponents/Message"
import {useState, useEffect, useContext} from "react";
import GlobalContext from "../GlobalContext";
import { GetLocation, CreateAccountRequest } from "../Data/GetData";

const CreateAccount = () => {

    const {} = useContext(GlobalContext); //VEEVEK --> Write any global variables you need here
    const [form, setForm] = useState({name: "", username: "", password: "", location: ""});


    useEffect(() => {

        // usernameRef.current.focus();
        navigator.geolocation.getCurrentPosition(async function(position) {
            const location = await GetLocation(position.coords.latitude, position.coords.longitude);
            setForm({...form, location: `${location.city}, ${location.country}`});
        });

    }, []);



    return (
        <>
            <Message />
        </>
    )
}

export default CreateAccount;