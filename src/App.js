import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div className='body-container'>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
