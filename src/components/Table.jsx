import React, { useState } from "react";

const Table = ({ employees }) => {
  const [total, setTotal] = useState(0);
  if (!employees) return null;
  //   console.log(employees);
  const result = () => {
    let res = 0;
    employees.forEach((employee) => {
      res += employee.days * employee.salaryPerDay;
    });
    setTotal(res);
  };

  const daysChange = (i, v) => {
    employees[i].days = v;
    result();
  };

  const salaryChange = (i, v) => {
    employees[i].salaryPerDay = v;
    result();
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Days</th>
            <th>Salary per day</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, i) => (
            <tr key={i}>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>
                <input
                  type="number"
                  value={employee.days}
                  onChange={(e) => daysChange(i, e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={employee.salaryPerDay}
                  onChange={(e) => salaryChange(i, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total Salary: {total}</h4>
    </>
  );
};

export default Table;
