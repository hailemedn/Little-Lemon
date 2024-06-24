import React, { useState } from 'react'
import bookingImg from '../assets/restauranfood.jpg'
import { type } from '@testing-library/user-event/dist/type';

function BookingForm({ availableTimes, dispatch, formData, handleChange, submitForm}) {
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
                <form action="" onSubmit={submitForm}>
                    {/* <h2>{formData.selectedDate}</h2> 
                    <h2>{formData.guests}</h2>
                    <h2>{formData.occassion}</h2>
                    <h2>{formData.chooseTime}</h2> */}
                    <div className='fields'>
                        <label htmlFor="chooseDate">Choose Date</label>
                        <input name='selectedDate' id='chooseDate' type="date" value={availableTimes.inputValue} onChange={e => dispatch({type: 'weekday', payload: e.target.value})} />
                    </div>
                    <div className='fields'>
                        <label htmlFor="chooseTime">Choose Time</label>
                        <select name="chooseTime" id="chooseTime" value={formData.chooseTime} onChange={handleChange}>
                            {availableTimes.time.map(times => (
                                <option key={times} value={times}>{times}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className='fields'>
                        <label htmlFor="guests">Number of guests</label>
                        <input name='guests' id='guests' type="number" placeholder='No of Guests' value={formData.guests} onChange={handleChange}/>
                    </div>

                    <div className='fields'>
                        <label htmlFor="occassion">Occassion</label>
                        <select name="occassion" id="occassion" value={formData.occassion} onChange={handleChange}>
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