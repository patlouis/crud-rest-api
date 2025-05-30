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

      {/* Header section */}
      <div className="d-flex justify-content-end mb-2">
        <Link to={`/edit/${employee.id}`} className="btn btn-success btn-sm mx-2">Edit</Link>
        <Link to="/" className="btn btn-success btn-sm">Go Back</Link>
      </div>
      {/* Employee Details Section */}
      <div className="p-3 border rounded shadow-sm bg-white space-y-2">
        <div>
          <span className="font-semibold text-gray-600">ID:</span> {employee.id}
        </div>
        <div>
          <span className="font-semibold text-gray-600">Name:</span> {employee.full_name}
        </div>
        <div>
          <span className="font-semibold text-gray-600">Title:</span> {employee.job_title}
        </div>
      </div>
      </div>
    </div>
  )
};

export default Read;
