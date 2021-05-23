import React, { Component } from 'react';
import "./HomePage.css";
import api from '../Api/index';
import "./createdepartment.css";

// Alejandro Brito 5/23/21
// TODO: include the Department Name we get from user input in the const payload
// right now, we specify the department name "TESTING PURPOSES!!!" in the payload (line 40)
// check the script "postToDB" right under render()


class CreateDepartment extends Component {
    constructor(props){
        super(props);
        this.state = {
          showModal: false,
          allEmployees: [],
          name: "",
        }
    }
    componentDidMount = async () => {
        await api.getAllEmployees().then(employee => {
            this.setState({
                allEmployees: employee.data,
            })
        })
      }
      
      render() {
        
        function postToDB() {
            const checkboxes = document.querySelectorAll(`input[name="members"]:checked`);
            let values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            

            const payload = { 
                "name": "TESTING PURPOSES!!!",
                "members": values
            }
            api.createDepartment(payload);
        }
        
          return (
            <span>
            <div className="center">
            <h1>Create Department</h1>
            <form>
            <label>
            <h4>Department Name</h4>
            <input className="box1" type="text" name="departmentName"/>
            </label>
            <label>
            <h4>Members to add</h4>
            { this.state.allEmployees.map(employee => 
            <div key={employee._id} >
            <input type="checkbox" name="members" id={employee.name} key={employee._id} value={employee._id} />
            <label for={employee.name}>{employee.name}</label>
            </div>
            )}
            </label>
            <button className="add-button" onClick={postToDB}>Create New Department</button>
            </form>
            </div>
            </span>
            
         
          )
      }
}

export default CreateDepartment