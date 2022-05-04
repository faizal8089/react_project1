import './App.css';
import React from 'react';
import dp from '../src/images/image.jpg';
import Main from './componetns/Main';
import Footer from './componetns/Footer';

function App() {
  return (
    <div className='card'>
      <img className='dp' src={dp} alt="" />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
