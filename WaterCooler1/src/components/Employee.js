import React from 'react';
import "./Employee.css";
import ReactModal from 'react-modal';
import api from "../Api/index";


ReactModal.setAppElement('#root');

class Employee extends React.Component {
    // create an Employee component using the props we are passed.
    // the props must have the 4 fields specified
    constructor(props){
      super(props);
      this.state = {
        showModal: false,
        name: '',
        email: '',
        about: '',
        image: '',
        id: props.id 
      };
    
      // binding
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    componentDidMount = async () => {
      const id = this.state.id;
      await api.getEmployee(id).then(employee => {
          this.setState({
              name: employee.data.name,
              email: employee.data.email,
              about: employee.data.about,
              image: employee.data.image
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
          <img className="employee-avi" src={this.state.image} onError={(e)=>{e.target.onerror = null; e.target.src="./default-avi.png"}} alt="Employee"  width="50" height="50" onClick={this.handleOpenModal} />
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="onRequestClose Example"
             onRequestClose={this.handleCloseModal}
             className="Modal"
             overlayClassName="Overlay"
          >
            <button className="right" onClick={this.handleCloseModal}>X</button>
            <div className="center">
            <img className="employee-avi" src={this.state.image}  alt="Employee" width="200" height="200" />
            <p>Name: {this.state.name}</p>
            Email: <a class="mailto" href="mailto:contact@test.com">{this.state.email}</a>
            <p>About Me: {this.state.about}</p>
            </div>
          </ReactModal>
          </span>
        );
    }
  }
 
export default Employee;