import axios from 'axios';
import React from 'react'

const Home = () => {
  const handleSubmit = async () => {
    let api = "http://localhost:8000/home";
    const response = await axios.get(api);
    console.log(response.data);
  }
  const handleSubmit2 = async () => {
    let api = "http://localhost:8000/insert";
    const response = await axios.get(api);
    console.log(response.data);
  }
  const handleSubmit3 = async () => {
    let api = "http://localhost:8000/display";
    const response = await axios.get(api);
    console.log(response.data);
  }
  return (
    <div>
      <h1>Welcome to home page</h1>
      <button onClick={handleSubmit}>Home Page</button>
      <button onClick={handleSubmit2}>Inseret Page</button>
      <button onClick={handleSubmit3}>Display Page</button>
    </div>
  )
}

export default Home