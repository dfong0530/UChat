import { useState } from "react";
import "./CSS/CreateAccount.css";
import FormInput from "./formInput";

const CreateAccount = () => {
    const [values, setValues] = useState({
        username:"",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: ""
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
// >>>>>>> 391ae54790f864953acf14217642e174e425b808

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "",
            label: "Username"
        },
        {
            id: 2,
            name: "email",
            type: "text",
            placeholder: "Email",
            label: "Email"
        },
        {
            id: 3,
            name: "birthday",
            type: "text",
            placeholder: "Birthday",
            label: "Birthday"
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password"
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "ConfirmPassword",
            label: "ConfirmPassword"
        }
    ]
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target);
    }

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    return (
        <div className="app">
            <h1>UChat</h1>
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                  <FormInput 
                  key={input.id} {...input} 
                  value={values[input.name]} 
                  onChange = {onChange} />
                ))}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateAccount;