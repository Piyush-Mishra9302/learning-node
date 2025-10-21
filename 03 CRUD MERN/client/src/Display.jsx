import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Display = () => {
    const [myData, setMyData] = useState([]);
    const loadData = async() => {
        let api = "http://localhost:8000/students/display";
        const response = await axios.get(api);
        setMyData(response.data);
    }
    useEffect(()=>{
        loadData();
    }, [])

    const ans = myData.map((item) => {
        return(
            
                <tr key = {item._id}>
                    <td>{item.rollno}</td>
                    <td>{item.name}</td>
                    <td>{item.city}</td>
                    <td>{item.fees}</td>   
                </tr>
            
           
        )
    })
  return (
    
   <>
    <h1>Display records</h1>
    <hr/>
    <table border='1' width='600' align='center'>
        <tr>
            <th>Roll no</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
        </tr>
        {ans}
    </table>
   </> 
  )
}

export default Display