import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';
import updateTimes from './components/BookingPage'
import { BrowserRouter } from 'react-router-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Render the restaurant name', () => {
   const availableTimes = {time: ["17:00", "18:00", "19:00", "20:00"]}
   render(<BrowserRouter> <BookingForm availableTimes={availableTimes}/> </BrowserRouter>);
   const restaurantName = screen.findByText('Little Lemon');
   expect(restaurantName).toBeInTheDocument;
});

// test('validating return value for initializeTimes', () => {
//    render(<BookingPage />);
   
// });

test('check the available times change when we select a different date', () => {
   render(<BookingPage/>);
   const dateInput = screen.getByLabelText('Choose Date');
   const availableTimes = screen.getByLabelText('Choose Time');
   const initalOptions = availableTimes.querySelectorAll('option');
   fireEvent.change(dateInput, {target: {value: '2024-06-24'}});
   expect(dateInput).toHaveValue('2024-06-24');
   const updatedOptions = availableTimes.querySelectorAll('option');
   expect(updatedOptions).not.toEqual(expect.objectContaining(initalOptions));
});

test('navigation to confirmation page when the form is submitted', () => {
   render(<BookingPage />);
   const date = screen.getByLabelText('Choose Date');
   const time = screen.getByLabelText('Choose Time');
   const guests = screen.getByLabelText('Number of guests');
   const occassion = screen.getByLabelText('Occassion');
})


