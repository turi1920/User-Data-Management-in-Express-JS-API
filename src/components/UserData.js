import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import Menu from "./Menu";
import "./UserData.css";

const UserData = () => {
  const [users, setUserData] = useState([]);

  // fetchData function inside useEffect hook
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3333/users");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);  // Empty dependency array means this runs only once after the component mounts

  return (
    <div align = "center">
      <Menu />
      <table border="3" align="center">
        <thead>
          <tr>
            <th>EmpNo</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Company</th>
            <th>Email</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.empno}>
              <td>{item.empno}</td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.company}</td>
              <td>{item.email}</td>
              <td>{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
