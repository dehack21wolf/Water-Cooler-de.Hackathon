import React from 'react';
import Employee from './Employee';
import "./Department.css";


const Department = (props) => {


  //const [depName , setDepName] = useState("");
  //const [employees , setEmployees] = useState([]);

  // sample object being passed for testing. Delete later
  const employee = {
    name: "Alejandro",
    email: "alejandroalainbrito@gmail.com",
    about: "I like Hack.Diversity",
    image: "./employee.jpeg"
  };

  // TODO: Deplay department as cards on the homepage
  // the {...employee} is the props we are passing to the Employee component. The component will display
  // the props which are passed to it
    return (        
      <>
        <div className="department-component">
          <div className="employee-section">
            <Employee {...employee}/>
            <Employee {...employee}/>
            <Employee {...employee}/>
            <Employee {...employee}/>
            
          </div>
          <div className="department-name">Engineering</div>
        </div>
      </>
    );
}
 
export default Department;