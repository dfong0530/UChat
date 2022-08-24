import { useState } from "react";
import "./CSS/CreateAccount.css";
import FormInput from "./formInput";
import SmsIcon from "@mui/icons-material/Sms";

const CreateAccount = () => {
    const [values, setValues] = useState({
        username:"",
        email: "",
        password: ""
    });
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

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Name",
            errorMessage: "Name should be greater than 0 characters",
            label: "Name",
            pattern: "^[A-Z-a-z0-9]{1,16}$",
            required: true
        },
        {
            id: 2,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters",
            label: "Username",
            required: true
        },
        {
            id: 3,
            name: "password",
            type: "text",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character.",
            label: "Password",
            pattern:  `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        }
    ]
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

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
                {inputs.map((input) => (
                  <FormInput 
                  key={input.id} {...input} 
                  value={values[input.name]} 
                  onChange = {onChange} />
                ))}
                <button />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateAccount;