import React, { useState } from "react";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

export default function EmployeeCrud() {
  const initialEmployees = [
    { eId: 101, name: "sanjay", sal: 5000 },
    { eId: 104, name: "deepak", sal: 8000 },
    { eId: 103, name: "ranjan", sal: 7000 },
    { eId: 102, name: "manoj", sal: 9000 },
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  return (
    <>
      <h2 className="text-center">THis is EmployeeCRUD Component</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <h3>Employee List</h3>
            <EmployeeList employees={employees} />
          </div>
          <div className="col-sm-4">
            <h3>Employee Add</h3>
            <AddEmployee />
          </div>
        </div>
      </div>
    </>
  );
}
