import React, { Component } from 'react';
import Mitch from '../Mitch.png'

class Staff extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: '', 
    currentUserAddress: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name, 
      currentUserAddress: idToken.idToken.claims.address
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <h1>Welcome {currentUserName}</h1>
        <img src={Mitch} width="202" height="211" alt="Mitch" />
        <p><b>Email:</b> {currentUserEmail}</p>
        <p><b>Phone number:</b> 510-589-1194 </p>
        <p><b>Net Pay:</b>$33.0/hr </p>
        <p><b>Withholdings:</b> 20%</p>
        <p><b>Client ID:</b> 010343814</p>
        <p><b>Team: </b> Global Apps </p>
        <p1>You have reached the authorized portal area of the employee database</p1>
        <p> 






        </p>
      </div>
    );
  }
}

export default Staff;