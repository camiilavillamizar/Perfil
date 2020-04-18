import React from 'react';
import Principal from './components/Principal';
import './App.css';
import Particles from 'react-particles-js';

const ParticleOpt = {
  particles : {
    number: {
      value: 150,
      density:{
        enable: true,
        value_area: 800
      }
    }

  }
}
function App() {
  return (
    <div className="App">
        <Particles params={ParticleOpt} class="hola"/>
        <div class="prueba">
          <Principal/>
        </div>

    </div>
  );
}

export default App;
