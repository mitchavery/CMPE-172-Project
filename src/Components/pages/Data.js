import React, {Component} from 'React'; 

class Data extends Component {


    constructor()
    {
        super(); 
        this.state = {
            title: 'Input Employee Data', 
            countries: []
        }
    }

//Make AJAX calls here
    componentDidMount() {
        console.log('Component Has Mounted')
    }

    addEmployee(event)
    {
        event.preventDefault(); 
        let data = {
            Employee_name: this.refs.Employee_name.nodeValue
        }; 
            var request = new Request('https://localhost:3000/api/new-country', {
                method: 'POST', 
                headers: new Headers({'Content-type': 'applciation/json '}), 
                body: JSON.stringify(data)
            }); 

            fetch(request)
            .then (function(response) {
                response.json()
                .then(function(data){
                    console.log(data)
                })
            })
    }

    render()
    {
      let title = this.state.title;
      return (
        <div className="data">
          <h1>{title}</h1>
          <form ref="Employee Data Information">
            <input
              type="text"
              ref="Employee_name"
              placeholder="country name"
            />
            <button onClick={this.addEmployee.bind(this)}>
              Add Employee
            </button>
          </form>
        </div>
      );
    }
}

export default Data; 