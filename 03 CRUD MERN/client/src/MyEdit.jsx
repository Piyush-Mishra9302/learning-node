import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const MyEdit = () => {
    const {id} = useParams();
    const [myData, setMyData] = useState({});

    const loadData = async () => {
        let api = `http://localhost:8000/students/updateedit/${id}`;
        const response = await axios.get(api)
        setMyData(response.data);
    }
    useEffect(() => {
        loadData();
    }, [])

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setMyData(values => ({...values, [name] : value}));
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        let api = `http://localhost:8000/students/updateeditsave`;
        const response = await axios.post(api, myData);
        alert(response.data.msg);
    }
  return (

    <>
        <h1>Edit Data</h1>
          Edit Roll no : <input type='text' name='rollno' value={myData.rollno} onChange={handleChange} />
        Edit Name : <input type='text' name='name' value={myData.name} onChange={handleChange} />
        Edit City : <input type='text' name='city' value={myData.city} onChange={handleChange} />
        Edit Fees : <input type='text' name='fees' value={myData.fees} onChange={handleChange} />
        <button onClick={handleSubmit}>Save</button>
    </>
  )
}

export default MyEdit