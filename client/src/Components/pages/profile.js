import React, {Component} from 'react';
import axios from 'axios';

export default class profile extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmployeesName = this.onChangeEmployeesName.bind(this);
        this.onChangeEmployeesEmail = this.onChangeEmployeesEmail.bind(this);
        this.onChangeEmployeesID = this.onChangeEmployeesID.bind(this);
        this.onChangeEmployeesManager = this.onChangeEmployeesManager.bind(this);
        this.onChangeEmployeesTeam = this.onChangeEmployeesTeam.bind(this);
        this.onChangeEmployeesStatus = this.onChangeEmployeesStatus.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            employees_Name: '',
            employees_Email: '',
            employees_ID: '',
            employees_Manager: '',
            employees_Team: '',
            employees_Status: ''
        }
    }

    onChangeEmployeesName(e) {
        this.setState({
            employees_Name: e.target.value
        });
    }

    onChangeEmployeesStatus(e) {
        this.setState({
            employees_Status: e.target.value
        });
    } 

    onChangeEmployeesEmail(e) {
        this.setState({
            employees_Email: e.target.value
        });
    }

    onChangeEmployeesID(e) {
        this.setState({
            employees_ID: e.target.value
        });
    }
    onChangeEmployeesManager(e) {
        this.setState({
            employees_Manager: e.target.value
        });
    }

    onChangeEmployeesTeam(e) {
        this.setState({
            employees_Team: e.target.value
        });
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
          .post('http://localhost:4000/employees/add', newEmployees)
          .then(res => console.log(res.data));

        this.setState({
          employees_Name: '',
          employees_Email: '',
          employees_ID: '',
          employees_Manager: '',
          employees_Team: '',
          employees_Status: ''
        });

        this.props.history.push("/NewEmployee");
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add New Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label><b>Employee Name:</b> </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.employees_Name}
                                onChange={this.onChangeEmployeesName}
                                />
                    </div>
                    <div className="form-group">
                        <label><b>Employee Email:</b> </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.employees_Email}
                                onChange={this.onChangeEmployeesEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label><b>Employee ID:</b> </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.employees_ID}
                                onChange={this.onChangeEmployeesID}
                                />
                    </div>
                    <div className="form-group">
                        <label><b>Employee Manager: </b></label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.employees_Manager}
                                onChange={this.onChangeEmployeesManager}
                                />
                    </div>
                    <div className="form-group">
                        <label><b>Employee Team:</b> </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.employees_Team}
                                onChange={this.onChangeEmployeesTeam}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="statusOptions"
                                    id= "statusC"
                                    value="Contractor"
                                    checked={this.state.employees_Status==='Contractor'}
                                    onChange={this.onChangeEmployeesStatus}
                                    />
                            <label className="form-check-label">Contractor</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="statusOptions"
                                    id="statusF"
                                    value="Full"
                                    checked={this.state.employees_Status ==='Full'}
                                    onChange={this.onChangeEmployeesStatus}
                                    />
                            <label className="form-check-label">Full Time</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-success" />
                    </div>
                </form>
            </div>
        )
    }
}