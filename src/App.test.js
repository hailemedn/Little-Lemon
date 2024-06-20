import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';
import updateTimes from './components/BookingPage'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Render the restaurant name', () => {
   const availableTimes = {time: ["17:00", "18:00", "19:00", "20:00"]}
   render(<BookingForm availableTimes={availableTimes}/>)
   const restaurantName = screen.findByText('Little Lemon');
   expect(restaurantName).toBeInTheDocument;
});

test('validating return value for initializeTimes', () => {
   render(<BookingPage />);
   
})


