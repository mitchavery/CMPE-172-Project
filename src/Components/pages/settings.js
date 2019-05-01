import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Staff extends Component {
  state = {
    currentUserName: "",
    currentUserEmail: ""
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  logout = async () => {
    this.props.auth.logout('/');
  };

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <p className="lead">
          To logout, click below,{" "}
          <Link to="/portal">click here</Link>
        </p>
        <button className="btn btn-light btn-lg" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}

export default Staff;