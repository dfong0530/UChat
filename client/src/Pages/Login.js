import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import "./CSS/Login.css";
import GlobalContext from "../GlobalContext";

const Login = () => {


    const [form, setForm] = useState({username: '', password: ''})

    const handleSubmit = () => {
    }

    return (
        <>
            <section className="login-page">
                <p className="title">
                    UChat
                </p>
                <form className="info" onSubmit={handleSubmit}>
                    <input 
                        className="name"
                        placeholder="Username"
                    />
                    
                    <input 
                        className="pass"
                        placeholder="Password"
                    />   

                    <button className="login-button">
                        Login
                    </button>
                </form>

                <p className="create-account">
                    or <Link to="/create-account" >create an account</Link >
                </p>
            </section>
        </>
    );
}

export default Login;