import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Employee = props => (
    <tr>
        <td>{props.employee.employees_Name}</td>
        <td>{props.employee.employees_Email}</td>
        <td>{props.employee.employees_ID}</td>
        <td>{props.employee.employees_Manager}</td>
        <td>{props.employee.employees_Team}</td>
        <td>{props.employee.employees_Status}</td> 
        <td>
            <Link to={"/edit/"+props.employee._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/delete/"+props.employee._id}>Delete</Link>
        </td>
    </tr>    
)

export default class EmployeesList extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
      axios.get('http://localhost:4000/employees/')
          .then(response => {
              this.setState({employees: response.data});
          })
          .catch(function (error) {
              console.log(error);
          })
        }

        componentDidUpdate()
        {
          axios.get('http://localhost:4000/employees/')
          .then(response => {
              this.setState({employees: response.data});
          })
          .catch(function (error) {
              console.log(error);
          })
        }
        

    employeesList() {
        var test = this.state.employees.map(function(currentEmployee, i) {
            return <Employee employee={currentEmployee} key={i} />;
        });
        console.log(test);
        return test
    }

    render() {
        return (
          <form>
            <h3>Employees List</h3>
            <form action="/EmployeesList" method="GET" class="form-inline">
              <div className="form-group">
                <input
                  type="text"
                  name="Search2" 
                  placeholder="Search..."
                  class="form-control"
                />
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-secondary"
                />
              </div>
            </form>
            <table
              className="table table-striped"
              style={{ marginTop: 20 }}
            >
              <thead>
                <tr>
                  <th>Employee Name</th>
                  <th>Employee Email</th>
                  <th>Employees ID</th>
                  <th>Employee Manager</th>
                  <th>Employee Team</th>
                  <th>Employee Status</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>{this.employeesList()}</tbody>
            </table>
          </form>
        );
    }
}