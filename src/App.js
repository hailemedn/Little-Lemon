import './App.css';
import Header from './components/Header.js'
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/Homepage.js'
import BookingPage from './components/BookingPage.js'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reservation' element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
