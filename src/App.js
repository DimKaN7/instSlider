import React from 'react';
import logo from './logo.svg';
import './App.css';

import Slider from './components/Slider';

function App() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

  return (
    <Slider images={images}></Slider>
  );
}

export default App;
