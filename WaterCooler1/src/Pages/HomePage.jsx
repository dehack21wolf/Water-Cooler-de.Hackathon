
import React, { Component, useState } from 'react';
import Department from "../components/Department"
import "./HomePage.css";


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            departments: []
        };

    }

    componentDidMount() {
       
    }
    

    render() {
        return (
            <div className="homepage-container">
                <div className="department-container">
                    <Department />
                    <Department />
                    <Department />
                    <Department />
                    <Department />
                    <Department />
                    <Department />
                </div>

                <button className="admin-button" onClick={this.togglePopup}>Admin</button>
            </div>
   
        )
    }
}
    
    export default HomePage