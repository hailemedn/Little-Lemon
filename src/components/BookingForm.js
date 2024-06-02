import React, { useState } from 'react'
import bookingImg from '../assets/restauranfood.jpg'

function BookingForm() {

    const [date, setDate] = useState("");
    const [availableTimes, setTime] = useState(["17:00","18:00","19:00"]);
    const [guests, setGuests] = useState("");
    const [occassion, setOccassion] = useState('');

  return (
    <section id='bookingForm-section'>
        <div className="wrapper booking-part">
            
            <div id='img-part'>
                <h1 >Little Lemon</h1>
                <h3 className="sub-title">Chicago</h3>
                <img src={bookingImg} alt="Booking Image" />
            </div>
            <div id='form-part'>
                <h3 className="sub-title">Find a table for any occassion</h3>
                <form action="">    
                    <div className='fields'>
                        <label htmlFor="">Choose Date</label>
                        <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
                    </div>
                    <div className='fields'>
                        <label htmlFor="">Choose Time</label>
                        <select name="" id="" value={availableTimes} onChange={e => setTime(e.target.value)}>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
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