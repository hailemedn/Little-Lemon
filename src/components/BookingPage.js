import BookingForm from "./BookingForm";
import { useState, useReducer } from "react";

const updateTimes = (availableTimes, action) => {
    if(action.type === 'weekday') return {time: ["17:00", "18:00", "19:00", "20:00"]};
    return availableTimes;

}


const BookingPage = () => {
    // const [availableTimes, setTime] = useState(['17:00','18:00','19:00', '20:00', '21:00']);
    const initializeTime = {time: ["Choose a date first"]}
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTime)
    

    return (
        <> 
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </>
    )
}

export default BookingPage;