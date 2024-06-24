import { Helmet } from "react-helmet";
import BookingForm from "./BookingForm";
import { useState, useReducer } from "react";
import { fetchAPI, submitAPI } from "../bookingsAPI";
import { act } from "react";
import { useNavigate } from "react-router-dom";


function parseDate(s) {
    var b = s.split(/\D/);
    return new Date(b[0], --b[1], b[2]);
  }

const updateTimes = (availableTimes, action) => {
    const chosenDate = parseDate(action.payload);
    if(action.type === 'weekday') return {time: fetchAPI(chosenDate)};
    return availableTimes;
    
}





//fetch data



const BookingPage = () => {
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault()
        if(submitAPI(formData)){
            navigate('/confirmBooking');
        };
    
    }
    // const [availableTimes, setTime] = useState(['17:00','18:00','19:00', '20:00', '21:00']);
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

    const initializeTime = {time: fetchAPI(today)}
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTime)

    return (
        <>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} formData={formData} handleChange={handleChange} submitForm={submitForm}/>
        </>
    )
}

export default BookingPage;