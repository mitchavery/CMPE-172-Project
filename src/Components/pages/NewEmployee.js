import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class NewEmployee extends Component {
  render() {
    return (
        <div>
        <p1 className="lead">
         <b>You have successfully added a new employee, {""}</b>
          <Link to="/EmployeesList">click here</Link>
        </p1>
    </div>
    );
  }
}