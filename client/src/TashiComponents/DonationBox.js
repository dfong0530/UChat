import "./CSS/DonationBox.css";
import React, { useState, useEffect, useContext } from "react";
import XIcon from "@mui/icons-material/Close";
import CloseIcon from "@mui/icons-material/Close";
import MoneyIcon from "@mui/icons-material/AttachMoney";

const DonationBox = () => {

  var clickedNote = false;

  const [donationAmount, setDonationAmount] = useState("10.00");
  const [donationNote, setDonationNote] = useState("Write a donation note...");

  const handleClickClose = () => {};

  const handleClickDonate = () => {};

  const handleClickAmount = () => { //try making these reset only on first click.
    setDonationAmount("");
  };

  const handleClickNote = () => {
    if (!clickedNote) {
      clickedNote = true;
      setDonationNote("");
    }
  };
  
  return (
    <>
      <section className="containerDonationBox">
        <div className="donationCloseButton">
          <button className="btnCloseButton" onClick={handleClickClose}>
            <CloseIcon className="CloseButton" sx={{ fontSize: 38}} />
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
            step="0.01"
            className="amountInput"
            name="amountInput"
            value={donationAmount}
            onClick={handleClickAmount}
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
            onClick={handleClickNote}
          />
        </div>
        <div className="donationDonateButton">
          <button type="submit" className="donateButton" onClick={handleClickDonate}>
            Donate
          </button>
        </div>
      </section>
    </>
  );
};

export default DonationBox;
