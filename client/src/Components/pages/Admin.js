import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EditTodo extends Component {
  render() {
      return (
        <div>
        <p className="lead">
          To logout,{" "}
          <Link to="/login">click here</Link>
        </p>
        </div>
      )
  }
}