import React, {Component} from 'react'

import ParticlesClass from './components/Particles';
import GetPrices from './components/callCryptoAPI'
import GetTicker from './components/ticker';

function App() {
  return (
    <div className="app">
      
       <header className="head">
         
       <h1>Crypto Market Watch</h1> 
       
       
      </header>
      
      <ParticlesClass/>
      <GetPrices/>

      

      <footer className="foot">
      <GetTicker/>
    </footer>
    </div>
    
    
  );
}

export default App;
