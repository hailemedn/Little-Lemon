import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';
import updateTimes from './components/BookingPage'
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('Render the restaurant name', () => {
//    const availableTimes = {time: ["17:00", "18:00", "19:00", "20:00"]}
//    render(<BrowserRouter> <BookingForm availableTimes={availableTimes}/> </BrowserRouter>);
//    const restaurantName = screen.findByText('Little Lemon');
//    expect(restaurantName).toBeInTheDocument;
// });

// test('validating return value for initializeTimes', () => {
//    render(<BookingPage />);
   
// });

test('check the available times change when we select a different date', () => {
   render(<BrowserRouter><BookingPage/></BrowserRouter>);
   const dateInput = screen.getByLabelText('Choose Date');
   const availableTimes = screen.getByLabelText('Choose Time');
   const initalOptions = availableTimes.querySelectorAll('option');
   fireEvent.change(dateInput, {target: {value: '2024-10-22'}});
   expect(dateInput).toHaveValue('2024-10-22');
   const updatedOptions = availableTimes.querySelectorAll('option');
   expect(updatedOptions).not.toEqual(expect.objectContaining(initalOptions));
});

test('navigation to confirmation page when the form is submitted', () => {
   render(<BrowserRouter><BookingPage /></BrowserRouter> );
   const date = screen.getByLabelText('Choose Date');
   const time = screen.getByLabelText('Choose Time');
   const guests = screen.getByLabelText('Number of guests');
   const occassion = screen.getByLabelText('Occassion');
   const submitButton = screen.getByText('Make your reservation');

   fireEvent.change(date, {target: {value: '2024-10-22'}});
   fireEvent.change(time, {target: {value: '17:00'}});
   fireEvent.change(guests, {target: {value: 2}});
   fireEvent.change(occassion, {target: {value: 'Dinner'}});

   userEvent.click(submitButton);
   //expect to navigate to /confirmBooking??
})


