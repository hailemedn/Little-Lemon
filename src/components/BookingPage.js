import { Helmet } from "react-helmet";
import BookingForm from "./BookingForm";
import { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from "../bookingsAPI";
import { act } from "react";
import { useNavigate } from "react-router-dom";

//fetch data

const BookingPage = ({ availableTimes, dispatch, formData, handleChange }) => {
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    if (submitAPI(formData)) {
      navigate("/confirmBooking");
    }
  };

  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        formData={formData}
        handleChange={handleChange}
        submitForm={submitForm}
      />
    </>
  );
};

export default BookingPage;
