import { useState, useRef } from "react";
import "./CSS/CreateAccount.css";
import SmsIcon from "@mui/icons-material/Sms";

const CreateAccount = () => {
    const [form, setForm] = useState({
        name:"",
        username: "",
        password: "",
        location: ""
    });
    const usernameRef = useRef(null);
// =======
// import Message from "../VeevekComponents/Message"
// import {useState, useEffect, useContext} from "react";
// import GlobalContext from "../GlobalContext";
// import { GetLocation, CreateAccountRequest } from "../Data/GetData";

// const CreateAccount = () => {

//     const {} = useContext(GlobalContext); //VEEVEK --> Write any global variables you need here
//     const [form, setForm] = useState({name: "", username: "", password: "", location: ""});


//     useEffect(() => {

//         // usernameRef.current.focus();
//         navigator.geolocation.getCurrentPosition(async function(position) {
//             const location = await GetLocation(position.coords.latitude, position.coords.longitude);
//             setForm({...form, location: `${location.city}, ${location.country}`});
//         });

//     }, []);



//     return (
//         <>
//             <Message />
//         </>
//     )
// }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(form);
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
                    <p className="title">UChat</p>
                            
            <div className = "flex">
                    <input
                        className="input"
                        placeholder="Name"
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
                    <button>Create Account</button>

                    <p> Already have an account? <a>Login</a></p>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount;