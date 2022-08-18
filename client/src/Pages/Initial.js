import "./CSS/Initial.css";
import { useContext } from "react";
import React from "react";
import SmsIcon from "@mui/icons-material/Sms";
<<<<<<< HEAD
import DonationBox from "../TashiComponents/DonationBox";
import GlobalContext from "../GlobalContext";

const Initial = () => { 
=======
import GlobalContext from "../GlobalContext";

const Initial = () => {
>>>>>>> 27c23b80e6301a53bfafdb1fcc9412ce8e82b304

  const {navigate} = useContext(GlobalContext);

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickSignUp = () => {
    navigate("/create-account");
  };

  return (
    <DonationBox />
    // <div className="initialPage">
    //   <div className="logoTitle">
    //     <SmsIcon className="logoUChat" sx={{ fontSize: 120 }}/>
    //     <h1 className="initialTitle">UChat</h1>
    //   </div>
    //   <h2 className="initialHeading">Support your friends in Ukraine</h2>
    //   <section className="buttonDiv">
    //     <div className="btnLogin-div">
    //       <button className="btnLogin" onClick={handleClickLogin}>
    //         <p>Login</p>
    //       </button>
    //     </div>
    //     <div className="btnSignUp-div">
    //       <button className="btnSignUp" onClick={handleClickSignUp}>
    //         <p>Sign Up</p>
    //       </button>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Initial;
