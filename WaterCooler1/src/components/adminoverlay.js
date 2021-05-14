import React from 'react';
import "./adminoverlay.css"
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

class AdminOverlay extends React.Component {
    // create an Employee component using the props we are passed.
    // the props must have the 4 fields specified
    constructor(props){
      super(props);
      this.state = {
        showModal: false,
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
        <button className="login-button" onClick={this.handleOpenModal} type="login">Login</button>
        <button className="cancel-button" onClick={this.handleCloseModal} type="cancel">Cancel</button>
      </div>
    </form>
            </div>
          </ReactModal>
           
          </span>
        );
    }
  }
 
export default AdminOverlay;