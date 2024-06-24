import './App.css';
import Header from './components/Header.js'
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/Homepage.js'
import BookingPage from './components/BookingPage.js'
import ConfirmedBooking from './components/ConfirmedBooking.js';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reservation' element={<BookingPage />} />
        <Route path='/confirmBooking' element={<ConfirmedBooking />}/>
      </Routes>
    </>
  );
}

export default App;
