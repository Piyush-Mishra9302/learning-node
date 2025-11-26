import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Form = () => {
    let userinfo ={
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    age: ""
    }
    const [data, setData] = useState(userinfo);
    
    const handleChange = (e) => {
        setData({...data, [e.target.name] : e.target.value});
    }

    const submitForm = async (e) => {
        e.preventDefault();
        let api =  "http://localhost:5000/user/create-user"
        let response = await axios.post(api, data);
        alert(response.data.message);
    }
  return (
    <form onSubmit={submitForm}>
        <h2>Create User with profile</h2>

        <input name='username' placeholder='Username' onChange={handleChange} />
        <input name='email' placeholder='Email' onChange={handleChange} />

        <input name='firstName' placeholder='First Name' onChange={handleChange} />
        <input name='lastName' placeholder='Last Name' onChange={handleChange} />
        <input name='age' placeholder='Age' onChange={handleChange} />

        <button type='submit'>Create User</button>

    </form>
  );
}

export default Form