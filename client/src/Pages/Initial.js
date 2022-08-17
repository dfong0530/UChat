import "./CSS/Initial.css";
import { useContext } from "react";
import React from "react";
import SmsIcon from "@mui/icons-material/Sms";
import GlobalContext from "../GlobalContext";

const Initial = () => {

  const {navigate} = useContext(GlobalContext);

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickSignUp = () => {
    navigate("/create-account");
  };

  return (
    <div className="initialPage">
      <div className="logoTitle">
        <SmsIcon className="logo" sx={{ fontSize: 120 }} />
        <h1>UChat</h1>
      </div>
      <h2>Support your friends in Ukraine</h2>
      <section className="buttonDiv">
        <div className="btnLogin-div">
          <button className="btnLogin" onClick={handleClickLogin}>
            <p>Login</p>
          </button>
        </div>
        <div className="btnSignUp-div">
          <button className="btnSignUp" onClick={handleClickSignUp}>
            <p>Sign Up</p>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Initial;
