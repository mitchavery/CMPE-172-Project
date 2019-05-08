import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { RSA_PKCS1_OAEP_PADDING } from 'constants';
//import Portal from '../Portal.png'; 
//import "./Home.css"

export default withAuth(
  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = { authenticated: null };
      this.checkAuthentication = this.checkAuthentication.bind(this);
      this.checkAuthentication();
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login("/");
    };

    logout = async () => {
      this.props.auth.logout("/");
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div>
          <p className="lead">
            You have entered the employee portal,{" "}
            <Link to="/EmployeesList">click here</Link>
          </p>
          <p className="lead">
          <b>View our GitHub repository: {" "}</b>
            <a href="https://github.com/mitchavery/CMPE172Project">GitHub</a>
          </p>
          <p className="lead">
            <b>Google Drive Link: {" "}</b>
            <a href="https://www.google.com">Drive</a>
          </p>
          <p className="lead">
            <b>View our Jenkins Server: {" "}</b>
            <a href="https://www.google.com">Jenkins</a>
          </p>
          <br />
          <button className="btn btn-light btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="lead">
            If you are an employee, please login below
          </p>
          <button className="btn btn-dark btn-lg" onClick={this.login}>
            Login
          </button>
        </div>
      );

      return (
        <div className="jumbotron">
          <h1 className="display-4">Employee Staff Portal</h1>
          {mainContent}
        </div>

      );
    }
  }
);