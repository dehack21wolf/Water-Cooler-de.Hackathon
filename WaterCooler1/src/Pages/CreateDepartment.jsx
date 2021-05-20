import React, { Component } from 'react';
import "./HomePage.css";
import api from '../Api/index';
import "./createdepartment.css";
import ReactModal from 'react-modal';


/*
createDep = async () => {
    const {name, depname } = this.state

    const payload = { name, depname}

    await api.addBook(payload).then(res => {
        window.alert(`Book created successfully`)
        this.setState({
            depname:'',
            name:'',
        })
    })
}
*/

class CreateDepartment extends Component {
    constructor(props){
        super(props);
        this.state = {
          showModal: false,
          employees: [],
          name: '',
          depname: '',
        }
         // binding
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    componentDidMount = async () => {
        await api.getAllEmployees().then(employee => {
            this.setState({
                employees: employee.data
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
          //console.log(this.state.employees);
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
       <input className="box1" type="text" />
     </label>
     <label>
       <h4>Members to add</h4>
       <select>
       <input type="checkbox"></input>{ this.state.employees.map(employee => 
       <option key={employee.name} value={employee.name}>{employee.name}</option>)}
       </select>

     </label>
     <div>
       <form action="/departments/create">
       <button className="add-button" onClick={this.handleOpenModal} type="login">Add Department</button>
       </form>
     </div>
   </form>
           </div>
         </ReactModal>
         </span>
          )
      }
}

export default CreateDepartment