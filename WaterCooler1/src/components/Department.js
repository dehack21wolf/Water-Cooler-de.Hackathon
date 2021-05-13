import React, { useState , useEffect } from 'react';
import Employee from './Employee';
import "./Department.css";

const Department = (props) => {


  const [depName , setDepName] = useState("");
  const [employees , setEmployees] = useState([]);


  // TODO: Deplay department as cards on the homepage
    return (        
      <>
        <div className="department-component">
          <div className="employee-section">
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
          </div>
          <div className="department-name">Engineering</div>
        </div>
      </>
    );
}
 
export default Department;