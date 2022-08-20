import "./CSS/DonationBox.css";
import React, { useState, useEffect, useContext } from "react";
import XIcon from "@mui/icons-material/Close";
import CloseIcon from "@mui/icons-material/Close";
import MoneyIcon from "@mui/icons-material/AttachMoney";

const DonationBox = ({ setDonationBoxDisplay, socket }) => {
  //USE E PREVENT DEFAULT INPUT

  const [donationAmount, setDonationAmount] = useState(""); //CHECK IF PROBLEM
  const [donationNote, setDonationNote] = useState("");

  const handleClickClose = () => {
    setDonationBoxDisplay({ donationBox: false, darkOverlay: false });
  };

  const handleClickDonate = () => {};

  return (
    <>
      <form onSubmit={handleClickDonate}>
        <section className="containerDonationBox">
          <div className="donationCloseButton">
            <button className="btnCloseButton" onClick={handleClickClose}>
              <CloseIcon className="CloseButton" sx={{ fontSize: 38 }} />
            </button>
          </div>
          <h2 className="donationHeading">Donate money to a friend</h2>
          <div className="donationMoneyIcon">
            <MoneyIcon className="MoneyIcon" sx={{ fontSize: 35 }} />
          </div>
          <div className="donationClickAmount">
            <input
              type="number"
              min="1"
              max="1000"
              className="amountInput"
              name="amountInput"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
          </div>
          <article className="donationUSD">
            <h4 className="textUSD">USD</h4>
          </article>
          <div className="donationClickNote">
            <textarea
              className="clickNoteArea"
              name="donationNote"
              value={donationNote}
              onChange={(e) => setDonationNote(e.target.value)}
            />
          </div>
          <div className="donationDonateButton">
            <button type="submit" className="donateButton">
              Donate
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default DonationBox;
