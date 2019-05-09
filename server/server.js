const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 
const mongoose = require('mongoose');
const employeesRoutes = express.Router();
const PORT = process.env.PORT || 4000;

let Employees = require('./employees.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/employees', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

employeesRoutes.route('/').get(function(req, res) {
    Employees.find(function(err, employees) {
        if (err) {
            console.log(err); 
        }
        else {
            res.json(employees); 
        }
    }); 
});


employeesRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  Employees.findById(id, function(err, employees) {
    res.json(employees);
  });
});

employeesRoutes.route('/:id').delete(function(req, res) {
    Employees.findByIdAndRemove({
        _id: req.params.id
    }, function (err, user) {
        if (err) return res.send(err);
        res.json({ message: 'Employees rsDeleted' });
    });
});

employeesRoutes.route('/add').post(function(req, res) {
    let employees = new Employees(req.body);
    employees.save()
        .then(employees => {
            res.status(200).json({'employees': 'employees added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new employees failed');
        });
});

employeesRoutes.route('/update/:id').post(function(req, res) {
    Employees.findById(req.params.id, function(err, employees) {
        if (!employees)
            res.status(404).send('data is not found');
        else
            employees.employees_Name = req.body.employees_Name;
            employees.employees_Email = req.body.employees_Email;
            employees.employees_ID = req.body.employees_ID;
            employees.employees_Manager = req.body.employees_Manager;
            employees.employees_Team = req.body.employees_Team;
            employees.employees_Status = req.body.employees_Status;

            employees.save().then(employees => {
                res.json('Employees updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});


app.use('/employees', employeesRoutes);
 
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname,'build', 'index.html'));
    });
  }

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});



