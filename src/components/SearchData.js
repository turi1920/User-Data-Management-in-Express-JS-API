import axios from "axios";
import { useState } from "react";
import Menu from "./Menu";

const SearchData = () => {
  const [userResult, setUserResult] = useState(null); // Null for initial state
  const [userId, setUserId] = useState("");

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  const show = async () => {
    try {
      const uid = parseInt(userId, 10);
      if (!uid) {
        alert("Please enter a valid User ID.");
        return;
      }
      const response = await axios.get(`http://localhost:3333/searchuser/${uid}`);
      setUserResult(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response && error.response.status === 404) {
        alert("User not found. Please enter a valid User ID.");
      } else {
        alert("Failed to fetch user data. Please try again.");
      }
      setUserResult(null); // Clear previous results
    }
  };

  return (
    <div>
      <Menu />
      <label htmlFor="userId">User ID:</label>
      <input
        type="number"
        id="userId"
        name="userId"
        value={userId}
        onChange={handleChange}
      />
      <br />
      <input type="button" value="Show" onClick={show} />
      <hr />
      {userResult ? (
        <div>
          <p>
            EmpNo: <b>{userResult.empno}</b>
          </p>
          <p>
            First Name: <b>{userResult.fname}</b>
          </p>
          <p>
            Last Name: <b>{userResult.lname}</b>
          </p>
          <p>
            Company: <b>{userResult.company}</b>
          </p>
          <p>
            Email: <b>{userResult.email}</b>
          </p>
          <p>
            Salary: <b>{userResult.salary}</b>
          </p>
        </div>
      ) : (
        userId && <p>No user data to display. Please search for a valid User ID.</p>
      )}
    </div>
  );
};

export default SearchData;
