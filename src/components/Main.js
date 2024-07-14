import "./styles.css";
import abtImage1 from "../assets/restaurant chef B.jpg";
import abtImage2 from "../assets/Mario and Adrian b.jpg";
import greekSaladImg from "../assets/greek salad.jpg";
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Homepage.js'
import BookingPage from './BookingPage.js'
import ConfirmedBooking from './ConfirmedBooking.js';
import { useState } from "react";
import { useReducer } from "react";
import { fetchAPI } from "../bookingsAPI.js";
import Card from "./Card";

function parseDate(s) {
  var b = s.split(/\D/);
  return new Date(b[0], --b[1], b[2]);
};

const updateTimes = (availableTimes, action) => {
  const chosenDate = parseDate(action.payload);
  if(action.type === 'set-time') return {date: action.payload, time: fetchAPI(chosenDate)};
  return availableTimes;
};

const Main = () => {

  const today = new Date();
    console.log(today);

    const [formData, setFormData] = useState({
        guests: '',
        occassion: '',
        selectedDate: '',
        chooseTime: '',
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value}); 
    };

  const initializeTime = {
    date: '',
    time: fetchAPI(today)
}
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTime)
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reservation' element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} handleChange={handleChange} formData={formData}/>} />
        <Route path='/confirmBooking' element={<ConfirmedBooking />}/>
      </Routes>
    </main>
  );
};

export default Main;
