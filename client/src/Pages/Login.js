import "./CSS/Login.css";
import { Link } from "react-router-dom";
import {useState, useContext, useRef, useEffect} from "react";
import GlobalContext from "../GlobalContext";
import SmsIcon from '@mui/icons-material/Sms';


const Login = () => {


    const [form, setForm] = useState({username: '', password: ''})
    const usernameRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(form.username)
        console.log(form.password);

        setForm({username: '', password: ''});
        usernameRef.current.focus();
    }

    return (
        <>
            <section className="login-page">
                <SmsIcon 
                    className="logo"
                    sx={{fontSize: 65}}
                />

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
                        ref={usernameRef}
                    />
                    
                    <input 
                        type="password"
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
                    or <Link className="create-account-link" to="/create-account">create an account</Link>
                </p>

            </section>
        </>
    );
}

export default Login;