import React, { Component } from 'react';
import Department from "../components/Department"
import "./HomePage.css";
import apis from '../Api/index';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: [],
            isLoading: false,
        };
    }
    componentDidMount = async () => {
        await apis.getAllDepartments().then(departments => {
            this.setState({
                departments: departments.data,
                isLoading: true
            })
        })
    }
    render() {
        return (
            <div className="homepage-container">
                <div className="department-container">
                    { this.state.departments.map(department => <Department key={department._id} id={department._id}/> 
                    )}
                </div>
                <button className="admin-button" onClick={this.togglePopup}>Admin </button>
          </div>
        )
    }
}
    export default HomePage