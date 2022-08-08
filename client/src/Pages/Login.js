import "./CSS/Login.css";

const Login = () => {
    return (
        <>
            <section className="login-page">
                <p className="title">
                    UChat
                </p>

                <form className="info">
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
                    or <a href="#">create an account</a> 
                </p>
            </section>
        </>
    );
}

export default Login;