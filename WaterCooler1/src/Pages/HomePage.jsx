
import React, { Component } from 'react';
import Department from "../components/Department"
import "./HomePage.css";


class HomePage extends Component {
    render() {
        return (
            <div className="department-container">
                <Department />
                <Department />


            </div>



            
        )
    }
}
    
    export default HomePage