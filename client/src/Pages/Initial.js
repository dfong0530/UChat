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
    //<DonationBox />
    <div className="initialPage">
      <div className="logoTitle">
        <SmsIcon className="logoUChat" sx={{ fontSize: 120,
        '@media (max-width: 750px)': {
          fontSize: 100
        }, '@media (max-width: 550px)': {
          fontSize: 75
        },
        '@media (max-width: 250px)': {
          fontSize: 60
        },
        }}/>
        <h1 className="initialTitle">UChat</h1>
      </div>
      <h2 className="initialHeading">Support your friends in Ukraine</h2>
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
