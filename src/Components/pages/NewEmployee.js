import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class NewEmployee extends Component {
  render() {
    return (
        <div>
        <p className="lead">
         You havs successfully added a new employee, {""}
          <Link to="/EmployeesList">click here</Link>
        </p>
    </div>
    );
  }
}