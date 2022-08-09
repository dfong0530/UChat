import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import "./CSS/Login.css";
import GlobalContext from "../GlobalContext";

const Login = () => {


    const [form, setForm] = useState({username: '', password: ''})

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(form.username)
        console.log(form.password);

        setForm({username: '', password: ''});
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
                        value={form.username}
                        onChange={(e) => setForm({...form, username: e.target.value})}
                        required
                    />
                    
                    <input 
                        className="pass"
                        placeholder="Password"
                        value={form.password}
                        onChange={(e) => setForm({...form, password: e.target.value})}
                        required
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