import { useState } from "react";
import axios from "axios";
import Menu from "./Menu";
import "./AddData.css";

const UserInsert = () => {

    const [data, setData] = useState({
        empno : 0, 
        name : '',
        basic : 0
    })

    const handleChange = event => {
        setData({
            ...data,[event.target.name] : event.target.value  
        })
    }

    const addUser = () => {
        axios.post("http://localhost:3333/adduser",{
            empno: data.empno,
            fname: data.fname,
            lname: data.lname,
            company: data.company,
            email: data.email,
            salary: data.salary
        }).then(resp => {
          console.log(resp.data);
        })
      }
    

    return(
        <div align="center">
            <Menu/>
            <label>EmpNo : </label>
            <input type="number" name="empno" 
                value={data.empno} onChange={handleChange} /> <br/><br/>
            <label>First Name : </label>
            <input type="text" name="fname" 
                value={data.fname} onChange={handleChange} /> <br/><br/> 
                <label>Last Name : </label>
            <input type="text" name="lname" 
                value={data.lname} onChange={handleChange} /> <br/><br/> 
                <label>Company : </label>
            <input type="text" name="company" 
                value={data.company} onChange={handleChange} /> <br/><br/> 
                <label>Email : </label>
            <input type="email" name="email" 
                value={data.email} onChange={handleChange} /> <br/><br/> 
            <label>Salary : </label>
            <input type="number" name="salary" 
                value={data.salary} onChange={handleChange} /> <br/><br/> 
            <input type="button" value="Add User" onClick={addUser} /> 
         </div>
    )
}

export default UserInsert;