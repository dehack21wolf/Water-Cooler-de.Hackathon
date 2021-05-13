
import React, { Component } from 'react';
import Department from "../components/Department"
import "./HomePage.css";
import "../components/adminoverlay.css"
import AdminOverlay from '../components/adminoverlay';


const employee = {
    name: "Alejandro",
    email: "alejandroalainbrito@gmail.com",
    about: "I like Hack.Diversity",
    image: "./admin.png"
  };
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

                <div className="admin-section">
                <AdminOverlay {...employee}/>
          </div>
            </div>
   
        )
    }
}
    //<button className="admin-button" onClick={this.togglePopup}>Admin </button>
    export default HomePage