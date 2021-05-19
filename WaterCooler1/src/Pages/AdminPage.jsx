import React, { Component } from 'react';
import Department from "../components/Department"
import "./HomePage.css";
import apis from '../Api/index';

class AdminPage extends Component {
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
          </div>

          //<button className="admin-button" onClick={AdminOverlay.handleOpenModal}>Admin </button>

        )
    }
}
    export default AdminPage