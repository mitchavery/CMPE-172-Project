let express = require('express'); 
let bodyParser = require('body-parser'); 
let morgan = require('morgan'); 
let pg = require('pg'); 
const PORT = 3000; 

let pool = new pg.Pool({
  user: "postgres", 
  database: "db",
  password: "password",
  host: "localhost",
  port: 5432,
  max: 10
});


let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev")); 

app.use(function(request, response, next)
{
    res.header("Access-Control-Allow Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-TypeError, Accept"); 
    next(); 
}); 

app.post('api/employee', function(request, response)
{
    var employee_name = request.body.employee_name; 
    pool.connect((err, db, done) =>  {
 
        if (err) {
            return console.log(err); 
        }
        else {
            db.query('INSERT INTO databse (values above) VALUES($1, $2, $3)' [values], (err, table) => {
                done(); 
                if (err) {
                    return console.log(err)
                }
                else {
                    console.log('INSERTED DATA'); 
                }
            }) 
        }
    }) 
}); 

app.listen(PORT, () => console.log("Listening on Port " + PORT)); 