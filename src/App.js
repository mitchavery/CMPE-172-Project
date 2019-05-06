import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import {Security, SecureRoute, ImplicitCallback} from '@okta/okta-react'; 
import Navbar from './Components/layout/Navbar'; 
import Footer1 from './Components/layout/Footer1'; 
import Home from './Components/pages/Home'; 
import Admin from './Components/pages/Admin'; 
import EmployeeInfo from './Components/pages/EmployeeInfo'; 
import Edit from './Components/pages/Edit'; 
import Search2 from './Components/pages/Search2'; 
import NewEmployee from './Components/pages/NewEmployee'; 
import profile from './Components/pages/profile'; 
import EmployeesList from './Components/pages/EmployeesList'; 
import Search from './Components/pages/Search';
import Settings from './Components/pages/settings'; 
import Portal from './Components/pages/Portal'; 
import "./App.css"
import Login from './Components/auth/login';


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
              <SecureRoute path="/Search" exact={true} component={Search} />
              <SecureRoute path="/EmployeesList" exact={true} component={EmployeesList} />
              <SecureRoute path="/Edit/:id" exact={true} component={Edit} />
              <SecureRoute path="/NewEmployee" exact={true} component={NewEmployee} />
              <SecureRoute path="/EmployeeInfo" exact={true} component={EmployeeInfo} />
              <SecureRoute path="/Search2" exact={true} component={Search2} />
              <Route
                path="/login"
                render={() => <Login baseUrl="https://dev-329764.okta.com" />}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
            <Footer1 />
          </div>
        </Security>
      </Router>

    );
  }
}

export default App;
