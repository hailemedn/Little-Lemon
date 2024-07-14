import React from "react";
import confirmationImg from "../assets/submit-successfully-128.png";

function ConfirmedBooking() {
  return (
    <section id="confirmation-section">
      <div className="wrapper">
        <img src={confirmationImg} alt="Successful Img" height={200} />
        <h2>You have Successfully Booked Your Table!</h2>
      </div>
    </section>
  );
}

export default ConfirmedBooking;
