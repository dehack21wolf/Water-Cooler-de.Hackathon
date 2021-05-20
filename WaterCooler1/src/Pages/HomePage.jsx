import React, { Component } from 'react';
import Department from "../components/Department"
import "./HomePage.css";
import apis from '../Api/index';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false, 
            departments: [],
            isLoading: false,
        };
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    componentDidMount = async () => {
        await apis.getAllDepartments().then(departments => {
            this.setState({
                departments: departments.data,
                isLoading: true
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
            <div className="homepage-container">
                <div className="department-container">
                    { this.state.departments.map(department => <Department key={department._id} id={department._id}/> 
                    )}
                </div>
          </div>
          <button className="admin-button" onClick={this.handleOpenModal}>Admin </button>
          <ReactModal 
             isOpen={this.state.showModal}
             contentLabel="onRequestClose Example"
             onRequestClose={this.handleCloseModal}
             className="Modal"
             overlayClassName="Overlay"
          >
            <button className="right" onClick={this.handleCloseModal}>X</button>
            <div className="center">
            <h1>Admin Login</h1>
            <form>
      <label>
        <h4>User</h4>
        <input className="box1" type="text" />
      </label>
      <label>
        <h4>Password</h4>
        <input className="box1" type="password" />
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
    export default HomePage