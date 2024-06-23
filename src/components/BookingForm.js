import React, { useState } from 'react'
import bookingImg from '../assets/restauranfood.jpg'
import { type } from '@testing-library/user-event/dist/type';

function BookingForm({ availableTimes, dispatch }) {

    // const [date, setDate] = useState("");
    
    const [guests, setGuests] = useState("");
    const [occassion, setOccassion] = useState('');

  return (
    <section id='bookingForm-section'>
        <div className="wrapper booking-part">
            {/* <h1>{availableTimes.time}</h1> */}
            <div id='img-part'>
                <h1 >Little Lemon</h1>
                <h3 className="sub-title">Chicago</h3>
                <img src={bookingImg} alt="Booking Image" />
            </div>
            <div id='form-part'>
                <h3 className="sub-title">Find a table for any occassion</h3>
                <form action="">    
                    <div className='fields'>
                        <label htmlFor="chooseDate">Choose Date</label>
                        <input id='chooseDate' type="date" onChange={(e) => dispatch({type: 'weekday', payload: e.target.value})}/>
                    </div>
                    <div className='fields'>
                        <label htmlFor="chooseTime">Choose Time</label>
                        <select name="chooseTime" id="chooseTime">
                            {availableTimes.time.map(times => (
                                <option key={times} value={times}>{times}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className='fields'>
                        <label htmlFor="">Number of guests</label>
                        <input type="number" placeholder='1' value={guests} onChange={e => setGuests(e.target.value)}/>
                    </div>

                    <div className='fields'>
                        <label htmlFor="">Occassion</label>
                        <select name="" id="" value={occassion} onChange={e => setOccassion(e.target.value)}>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                    
                    
                    <input type="submit" value='Make your reservation' className='btn primary'/>
                </form>
            </div>
        </div>
        
    </section>
  )
}

export default BookingForm