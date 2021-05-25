import React, { Component } from 'react'
import apis from '../Api/index';
import "./Department.css";
import Employee from "./Employee"

class Department extends Component {
    constructor(props){
        super(props);
        this.state = {
          id: props.id,
          name: '',
          employees: [],
        }
    }
    componentDidMount = async () => {
        const id = this.state.id
        await apis.getDepartment(id).then(department => {
            this.setState({
              name: department.data.name,
              employees: department.data.members
            })
        })
    }
    render() {
        return (        
            <>
              <div className="department-component">
                <div className="employee-section">
                  { this.state.employees.map(employee => <Employee key={employee} id={employee}/>)}
                </div>
                <div className="department-name">{this.state.name}</div>
              </div>
            </>
          );
        }
}
export default Department