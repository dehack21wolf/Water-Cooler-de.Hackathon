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
function getOptions() {
  var x = document.getElementById("mySelect");
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
    txt = txt + " " + x.options[i].text;
  }
  document.getElementById("demo").innerHTML = txt;
}

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
       { this.state.employees.map(employee => 
       <div key={employee._id} >
       <input type ="checkbox" id={employee._id} key={employee._id} value={employee.name} />
       <label for={employee._id}>{employee.name}</label>
      </div>
       )}
     </label>
     </form>
     <div>
       <form>
       <button className="add-button" onClick={this.handleOpenModal} type="login">Add Department</button>
       </form>
     </div>
   
           </div>
         </ReactModal>
         </span>
          )
      }
}

export default CreateDepartment