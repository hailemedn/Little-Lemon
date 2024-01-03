import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/header/Nav';
import Main from './components/main/Main';
import React from 'react';

function App() {
  return (
    <div className='app'>
      <Header />
      <Nav />
      {/* <Main /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
