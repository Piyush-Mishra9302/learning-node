import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Insert = () => {
    const [input, setInput] = useState({});
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({...values, [name]: value}));
    }
    const handleSUbmit =async ()=> {
        let api = "http://localhost:8000/students/save";
        const response = await axios.post(api, input);
        console.log(response.data);
        alert("Data Saved Successfully !!!")
    }
  return (
    <div style={{backgroundColor: "red"}}>
        <h1>Welcome to the insert page</h1>
        <br/>
        <br/>
        <br/>
        Enter Roll no : <input type='text' name='rollno' placeholder='Enter roll number' onChange={handleChange} />
        Enter Name : <input type='text' name='name' placeholder='Enter name' onChange={handleChange} />
        Enter City : <input type='text' name='city' placeholder='Enter city' onChange={handleChange} />
        Enter Fees : <input type='text' name='fees' placeholder='Enter fees' onChange={handleChange} />
        <button onClick={handleSUbmit}>Save</button>
    </div>
  )
}

export default Insert