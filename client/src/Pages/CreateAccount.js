import { useState, useRef, useContext, useEffect } from "react";
import "./CSS/CreateAccount.css";
import {CreateAccountRequest, GetLocation} from "../Data/GetData";
import SmsIcon from "@mui/icons-material/Sms";
import GlobalContext from "../GlobalContext";

const CreateAccount = () => {
    const [form, setForm] = useState({
        name:"",
        username: "",
        password: "",
        location: "",
        inUkraine: false
    });

    const usernameRef = useRef(null);
    const {navigate} = useContext(GlobalContext);


    useEffect(() => {
        usernameRef.current.focus();
    }, [])

    useEffect(() => {

        // usernameRef.current.focus();
        navigator.geolocation.getCurrentPosition(async function(position) {
            const location = await GetLocation(position.coords.latitude, position.coords.longitude);

            if(location.country.toLowerCase() === "ukraine"){
                setForm({...form, inUkraine: true})
            }

            setForm({...form, location: `${location.city}, ${location.country}`});
        });

    }, []);


    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        //{status: int, user: }
        const data = await CreateAccountRequest(form);

        if(data.status === 200){
            navigate('/login');
        }
        else{
            setForm({username: '', password: '', name: '', location: '', inUkraine: false});
            usernameRef.current.focus();
        }
    }

    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
            <SmsIcon
            className="logo"
            sx={{
                fontSize: 120,
                "@media (max-width: 1000px)": { fontSize: 108 },
                "@media (max-width: 800px)": { fontSize: 96 },
                "@media (max-width: 600px)": { fontSize: 80 },
                "@media (max-width: 425px)": { fontSize: 72 },
            }}
            />

                <h1>UChat</h1>
                <input
                    className="input"
                    placeholder="Username"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    ref={usernameRef}
                />

                <input
                    type="user"
                    className="input"
                    placeholder="Username"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    required
                />
                <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateAccount;