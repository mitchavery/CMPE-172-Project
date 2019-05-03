import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import {Security, SecureRoute, ImplicitCallback} from '@okta/okta-react'; 
import Navbar from './Components/layout/Navbar'; 
import Home from './Components/pages/Home'; 
import Admin from './Components/pages/Admin'; 
import profile from './Components/pages/profile'; 
import Settings from './Components/pages/settings'; 
import Portal from './Components/pages/Portal'; 

//import CompanyView from './Components/pages/Companyview';
import "./App.css"
import Login from './Components/auth/login';

const config = 
{
  issuer: 'https://https://dev-329764.okta.com/oauth2/default',
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oaitauk9gmDNbshk356'
}


function onAuthRequired({history})
{
  history.push('/login');
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-329764.okta.com/oauth2/default"
          client_id="0oaitauk9gmDNbshk356"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <Navbar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/profile" exact={true} component={profile} />
              <SecureRoute path="/Admin" exact={true} component={Admin} />
              <SecureRoute path="/Settings" exact={true} component={Settings} />
              <SecureRoute path="/Portal" exact={true} component={Portal} />
              <Route
                path="/login"
                render={() => <Login baseUrl="https://dev-329764.okta.com" />}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
