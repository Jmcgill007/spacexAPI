import React from 'react';
import logo from './spacex.png'
import './App.css';
import Launches from './components/Launches'
import Launch from './components/SingleLaunch.js'
import {BrowserRouter as Router, Route} from 'react-router-dom' 
 
function App() {

  return (
    <Router> 
      <div className="container">
        <img src ={logo} alt="SpaceX"
          style={{width: "full",height: 200, display: 'block', margin: 'auto'}}
        />
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />
      </div>
    </Router>  
  );
}

export default App;
