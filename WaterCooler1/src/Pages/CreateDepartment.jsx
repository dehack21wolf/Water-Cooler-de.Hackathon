import React, { Component } from 'react';
import "./HomePage.css";
import apis from '../Api/index';
import "./createdepartment.css";
class CreateDepartment extends Component {
    constructor(props){
        super(props);
        this.state = {
          showModal: false,
          id: props.id,
          employees: [],
        }
    }
    componentDidMount = async () => {
        const id = this.state.id
        await apis.getDepartment(id).then(department => {
            this.setState({
              employees: department.data.members
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
          return (
            <span>
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
       { this.state.employees.map(employee => 
       <option key={employee}>{employee}</option>)}
       </select>
     </label>
     <div>
       <form action="/admin">
       <button className="login-button" onClick={this.handleOpenModal} type="login">Login</button>
       </form>
       <button className="cancel-button" onClick={this.handleCloseModal} type="cancel">Cancel</button>

     </div>
   </form>
           </div>
         </ReactModal>
         </span>
          )
      }
}

export default CreateDepartment