import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Update = () => {
    const [myData, setMyData] = useState([]);
    const loadData = async() => {
        let api = "http://localhost:8000/students/updatedata";
        const response = await axios.get(api);
        setMyData(response.data);
    }
    useEffect(()=>{
        loadData();
    }, [])

    const myDel = async(id) => {
        console.log(id)
        let api = `http://localhost:8000/students/updatedelete?id=${id}`;
        const response = await axios.delete(api)
        alert(response.data.msg);
        loadData();
    }

    const ans = myData.map((key) => {
        return(
            <>
                <tr>
                    <td>{key.rollno}</td>
                    <td>{key.name}</td>
                    <td>{key.city}</td>
                    <td>{key.fees}</td>
                    <td>
                        Edit /
                        <a href='#' onClick={()=> {myDel(key._id)}}>Delete</a>
                    </td>
                </tr>
            </>
           
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
            <th>Update</th>
        </tr>
        {ans}
    </table>
   </> 
  )
}

export default Update