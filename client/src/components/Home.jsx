import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/delete/${id}`)
      .then(res => {
        location.reload();
      })
      .catch(err => console.log(err));
  }
  
  return (
    <>
      <div className="d-flex w-100 bg-secondary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <h2>Employee List</h2>
          <div className="d-flex justify-content-end">
            <Link to="/create" className="btn btn-success btn-sm">Create +</Link>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.id}</td>
                  <td>{employee.full_name}</td>
                  <td>{employee.job_title}</td>
                  <td>
                    <Link to={`/read/${employee.id}`} className="btn btn-secondary btn-sm">Read</Link>
                    <Link to={`/edit/${employee.id}`} className="btn btn-primary btn-sm mx-2">Update</Link>
                    <button onClick={() => handleDelete(employee.id)} className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
