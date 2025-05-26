import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Read() {
  const {id} = useParams();
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/read/${id}`)
      .then(res => {
        console.log(res)
        setEmployee(res.data[0]);
      })
      .catch(err => console.log(err));
  }, [])
  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3"> 
      <h2>Employee Details</h2>
      <div className="d-flex justify-content-end">
        <Link to={`/edit/${employee.id}`} className="btn btn-success btn-sm">Edit</Link>
        <Link to="/" className="btn btn-success btn-sm mx-2">Go Back</Link>
      </div>
      <div className="p-2">
        <h3>{employee.id}</h3>
        <h3>{employee.full_name}</h3>
        <h3>{employee.job_title}</h3>
      </div>
      </div>
    </div>
  )
};

export default Read;
