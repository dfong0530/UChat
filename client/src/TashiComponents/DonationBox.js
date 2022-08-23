import "./CSS/DonationBox.css";
import React, { useState, useEffect, useContext } from "react";
import XIcon from "@mui/icons-material/Close";
import CloseIcon from "@mui/icons-material/Close";
import MoneyIcon from "@mui/icons-material/AttachMoney";
import { fontSize } from "@mui/system";

const DonationBox = ({ setDonationBoxDisplay, socket }) => {
  //USE E PREVENT DEFAULT INPUT

  const [donationAmount, setDonationAmount] = useState("10.00"); //CHECK IF PROBLEM
  const [donationNote, setDonationNote] = useState("");

  const handleClickClose = () => {
    setDonationBoxDisplay({ donationBox: false, darkOverlay: false });
  };

  const handleClickAmount = () => {
    setDonationAmount("");
  }
  
  return (
    <>
      <div className="zIndexDonate">
        <form>
          <section className="containerDonationBox">
            <div className="donationCloseButton">
              <button className="btnCloseButton" onClick={handleClickClose}>
                <CloseIcon
                  className="CloseButton"
                  sx={{
                    fontSize: 38,
                    "@media (max-width: 850px)": { fontSize: 35 },
                    "@media (max-width: 700px)": { fontSize: 32 },
                    "@media (max-width: 550px)": { fontSize: 25 },
                    "@media (max-width: 300px)": {fontSize: 23},
                  }}
                />
              </button>
            </div>
            <h2 className="donationHeading">Donate money to a friend</h2>
            <div className="donationMoneyIcon">
              <MoneyIcon
                className="MoneyIcon"
                sx={{
                  fontSize: 35,
                  "@media (max-width: 850px)": { fontSize: 32 },
                  "@media (max-width: 700px)": { fontSize: 30 },
                  "@media (max-width: 550px)": { fontSize: 22 },
                  "@media (max-width: 300px)": {fontSize: 20},
                }}
              />
            </div>
            <div className="donationClickAmount">
              <input
                type="number"
                min="1"
                max="100000"
                step="0.01"
                className="amountInput"
                name="amountInput"
                value={donationAmount}
                onClick={handleClickAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                required
              />
            </div>
            <article className="donationUSD">
              <h4 className="textUSD">USD</h4>
            </article>
            <div className="donationClickNote">
              <textarea
                className="clickNoteArea"
                name="donationNote"
                placeholder="Write a donation note..."
                value={donationNote}
                onChange={(e) => setDonationNote(e.target.value)}
                required
              />
            </div>
            <div className="donationDonateButton">
              <button type="submit" className="donateButton">
                Donate
              </button>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default DonationBox;
