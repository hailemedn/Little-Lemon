import React, { useState } from "react";
import bookingImg from "../assets/restauranfood.jpg";
import { type } from "@testing-library/user-event/dist/type";

function BookingForm({
  availableTimes,
  dispatch,
  formData,
  handleChange,
  submitForm,
}) {
  const getIsFormValid = () => {
    return availableTimes.date && formData.guests;
  };

  // const handleDateChange = (e) => {
  //     const newDate = e.target.value;
  //     dispatch({type: 'set-date', payload: newDate});
  //     ;

  // }

  console.log(getIsFormValid());
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="bookingForm-section">
      <div className="wrapper booking-part">
        {/* <h1>{availableTimes.time}</h1> */}
        <div id="img-part">
          <h1>Little Lemon</h1>
          <h3 className="sub-title">Chicago</h3>
          <img src={bookingImg} alt="Booking Image" />
        </div>
        <div id="form-part">
          <h3 className="sub-title">Find a table for any occassion</h3>
          <form action="" onSubmit={submitForm}>
            {/* <h2>{formData.selectedDate}</h2> 
                    <h2>{formData.guests}</h2>
                    <h2>{formData.occassion}</h2>
                    <h2>{formData.chooseTime}</h2> */}

            <div className="fields">
              <label htmlFor="chooseDate" id="choose-date-label">
                Choose Date
              </label>
              <input
                name="selectedDate"
                id="chooseDate"
                type="date"
                aria-labelledby="chooose-date-label"
                value={availableTimes.date}
                onChange={(e) =>
                  dispatch({ type: "set-time", payload: e.target.value })
                }
                min={today}
                required
              />
            </div>
            <div className="fields">
              <label htmlFor="chooseTime" id="choose-time-label">
                Choose Time
              </label>
              <select
                name="chooseTime"
                id="chooseTime"
                aria-labelledby="choose-time-label"
                value={formData.chooseTime}
                onChange={handleChange}
              >
                {availableTimes.time.map((times) => (
                  <option key={times} value={times}>
                    {times}
                  </option>
                ))}
              </select>
            </div>

            <div className="fields">
              <label htmlFor="guests" id="guests-label">Number of guests</label>
              <input
                name="guests"
                id="guests"
                type="number"
                placeholder="No of Guests"
                aria-labelledby="guests-label"
                value={formData.guests}
                onChange={handleChange}
                min={1}
                required
              />
            </div>

            <div className="fields">
              <label htmlFor="occassion" id="occassion-label">Occassion</label>
              <select
                name="occassion"
                id="occassion"
                aria-labelledby="occassion-label"
                value={formData.occassion}
                onChange={handleChange}
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            <input
              type="submit"
              value="Make your reservation"
              className="btn primary"
              disabled={!getIsFormValid()}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
