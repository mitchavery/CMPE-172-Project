import React, {Component} from 'react';
import axios from 'axios';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees_Name: "",
      employees_Email: "",
      employees_ID: "",
      employees_Manager: "",
      employees_Team: "",
      employees_Status: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const newEmployees = {
      employees_Name: this.state.employees_Name,
      employees_Email: this.state.employees_Email,
      employees_ID: this.state.employees_ID,
      employees_Manager: this.state.employees_Manager,
      employees_Team: this.state.employees_Team,
      employees_Status: this.state.employees_Status
    };

    axios
      .get("http://localhost:4000/employees/add", newEmployees)
      .then(res => console.log(res.data));

    this.setState({
      employees_Name: "",
      employees_Email: "",
      employees_ID: "",
      employees_Manager: "",
      employees_Team: "",
      employees_Status: ""
    });
  }

  render() {
    return (
      <div>
        <h3> Search for Employees Below by Name</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>
              <b>Employee Name:</b>{" "}
            </label>
            <input
              type="text"
              className="form-control"
              name = "name"
              value={this.state.employees_Name}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-secondary" />
          </div>
        </form>
      </div>
    );
  }
}