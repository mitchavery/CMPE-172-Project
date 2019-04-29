import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 

import Navbar from './Components/layout/Navbar'; 
import Home from './Components/pages/Home'; 
import Portal from './Components/pages/Portal'; 


import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/portal" exact={true} component={Portal} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
