import React, { Component } from 'react';
import "./HomePage.css";
import api from '../Api/index';
import "./CreateDepartment.css";
import ReactModal from 'react-modal';

class CreateDepartment extends Component {
    constructor(props){
        super(props);
        this.state = {
          showModal: false,
          allEmployees: [],
        }
        // binding
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    

    componentDidMount = async () => {
        await api.getAllEmployees().then(employee => {
            this.setState({
                allEmployees: employee.data,
            })
        })
      }

      handleOpenModal () {
        this.setState({ showModal: true });
      }
      handleCloseModal () {
        this.setState({ showModal: false });
      }
      
      render() {
        function postToDB() {
            const name = document.querySelector("#departmentname").value;
            const checkboxes = document.querySelectorAll(`input[name="members"]:checked`);
            let values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            

            const payload = { 
                "name": name,
                "members": values
            }
            
            if(name !== "") {
                api.createDepartment(payload)
                window.alert("Department '" + name + "' successfully created!")
                

            } else {
                window.alert("Please add a Department name.")
            }
            
        }
        
          return (
            <span>
            <button className="create-button" onClick={this.handleOpenModal}>Create Department</button>  
            <ReactModal 
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal1"
            overlayClassName="Overlay1"
            >
            <button className="right" onClick={this.handleCloseModal}>X</button>
            <div className="center">
            <h1>Create Department</h1>
            <form>
            <label>
            <h4>Department Name</h4>
            <input className="box1" id="departmentname" type="text" required />
            </label>
            <label>
            <h4>Members to add</h4>
            <div className="members-list">
            { this.state.allEmployees.map(employee => 
            <div key={employee._id} >
            <input type="checkbox" name="members" id={employee.name} key={employee._id} value={employee._id} />
            <label htmlFor={employee.name}>{employee.name}</label>
            </div>
            )}
            </div>
            </label>
            <p></p>
            <button className="add-button" onClick={postToDB}>Create New Department</button>
            </form>
            </div>
            </ReactModal>
            </span>
            
         
          )
      }
}

export default CreateDepartment