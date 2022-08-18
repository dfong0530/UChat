import "./CSS/DonationBox.css";
import React, { useState, useEffect, useContext } from "react";
import XIcon from "@mui/icons-material/Close";
import CloseIcon from "@mui/icons-material/Close";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const DonationBox = () => {
  var clicked = false;
  const clickOnce = () => {
    if (!clicked) {
      clicked = true;
      setDonationNote("");
      console.log(clicked);
    }
  };

  const [donationAmount, setDonationAmount] = useState("10.00");
  const [donationNote, setDonationNote] = useState("Write a donation note...");

  const handleClickClose = () => {};

  const handleClickDonate = () => {};

  const handleClickAmount = () => {};

  const handleClickNote = () => {};

  return (
    <>
      <section className="containerDonationBox">
        <div className="donationCloseButton">
          <button className="btnCloseButton" onClick={handleClickClose}>
            <CloseIcon className="CloseButton" sx={{ fontSize: 25 }} />
          </button>
        </div>
        <h2 className="donationHeading">Donate money to a friend</h2>
        <div className="donationMoneyIcon">
          <AttachMoneyIcon className="MoneyIcon" sx={{ fontSize: 22 }} />
        </div>
        <div className="donationClickAmount">
          <button className="amountBtn" onClick={handleClickAmount}>
            <h1 className="donationAmount">{donationAmount}</h1>
          </button>
        </div>
        <article className="donationUSD">
          <h4 className="textUSD">USD</h4>
        </article>
        <div className="donationClickNote">
          <form>
            <input
              type="text"
              id="donationNote"
              name="donationNote"
              value={donationNote}
              onChange={(e) => setDonationNote(e.target.value)}
              onClick={clickOnce}
            />
            {/* <button className="donationNoteBtn" onClick={{ handleClickNote }}>
            {donationNote}
          </button> */}
          </form>
        </div>
      </section>
    </>
  );
};

export default DonationBox;
