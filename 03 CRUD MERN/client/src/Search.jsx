import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const Search = () => {
    const[rollno, setRollno] = useState('');
    const [myData, setMyData] = useState([])

    const handleSubmit = async() => {
        let api = "http://localhost:8000/students/search";
        let response = await axios.post(api, {rollno:rollno});
        console.log(response.data)
        setMyData(response.data);
    }

    const ans = myData.map((key) => {
        return(
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>

                </tr>
            </>
        )
    })
  return (
    <>
        <h1>Search Page</h1>

        Enter Roll no. <input type=' text' name="rollno" value={rollno}
        onChange={(e) => {setRollno(e.target.value)}} />
        <button onClick={handleSubmit}>Search</button>
        <hr/>
        <table>
            <tr>
                <th>Roll no</th>
                <th>Name</th>
                <th>City</th>
                <th>fees</th>
            </tr>
            {ans}
        </table>
    </>
  )
}

export default Search