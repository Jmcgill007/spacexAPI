import React from 'react';
import logo from './spacex.png'
import './App.css';
import Launches from './components/Launches'

 
function App() {

  return (
      <div className="container">
        <img src ={logo} alt="SpaceX"
          style={{width: "full",height: 200, display: 'block', margin: 'auto'}}
        />
        <Launches />
      </div>
  );
}

export default App;
