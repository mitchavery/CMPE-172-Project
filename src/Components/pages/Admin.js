import React, { Component } from 'react';

class Admin extends Component {
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
        <h1> Admin View </h1>
        
      </div>
    );
  }
}

export default Admin;