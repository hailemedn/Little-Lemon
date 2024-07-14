import './App.css';
import Header from './components/Header.js'
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/Homepage.js'
import BookingPage from './components/BookingPage.js'
import ConfirmedBooking from './components/ConfirmedBooking.js';
import Main from './components/Main.js';

function App() {
  return (
    <>
      <Header />
      <Main />
      
    </>
  );
}

export default App;
