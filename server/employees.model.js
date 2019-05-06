const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employees = new Schema({
    employees_Name: {
        type: String
    },
    employees_Email: {
        type: String
    },
    employees_ID: {
        type: String
    },
    employees_Manager: {
        type: String
    },
    employees_Team: {
        type: String
    },
    employees_Status: {
        type: String
    }
});

module.exports = mongoose.model('Employees', Employees);