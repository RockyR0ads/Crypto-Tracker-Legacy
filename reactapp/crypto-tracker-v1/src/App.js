import React, {Component} from 'react'

import ParticlesClass from './components/Particles';
import Particles from 'react-particles-js';
import GetPrices from './components/callCryptoAPI'
import getTicker from './components/ticker'

function App() {
  return (
    <div className="app">
      
       <header>
         
       <h1>CryptoCurrency Tracker</h1> 
       
       
      </header>
      
      <ParticlesClass/>
      <GetPrices/>
      {/* <getTicker/> */}
    </div>
    
  );
}

export default App;
