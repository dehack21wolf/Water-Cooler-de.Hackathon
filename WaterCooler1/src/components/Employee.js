import React from 'react';
import "./Employee.css"
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

class Employee extends React.Component {
    // create an Employee component using the props we are passed.
    // the props must have the 4 fields specified
    constructor(props){
      super(props);
      this.state = {
        showModal: false,
        name: props.name,
        email: props.email,
        about: props.about,
        image: props.image
      };
    
      // binding
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
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
          <img className="employee-avi" src={this.state.image} className="rounded-circle" alt="Employee" width="50" height="50" onClick={this.handleOpenModal} />
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="onRequestClose Example"
             onRequestClose={this.handleCloseModal}
             className="Modal"
             overlayClassName="Overlay"
          >
            <button className="right" onClick={this.handleCloseModal}>X</button>
            <div className="center">
            <img className="employee-avi" src="./employee.jpeg" className="rounded-circle" alt="Employee" width="200" height="200" />
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email} </p>
            <p>About Me: {this.state.about}</p>
            </div>
          </ReactModal>
          </span>
        );
    }
  }
 
export default Employee;