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
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
          <Employee />


          <div className="department-name">{props.depName}</div>
        </div>
      </>
    );
}
 
export default Department;