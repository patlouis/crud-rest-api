import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


function Create() {
  const [values, setValues] = useState({ 
    name: '', 
    title: '' 
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/create', values)
    .then(res => {
      console.log(res);
      navigate('/');
    })
    .catch(err => console.log(err));
  }


  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3"> 
            <form onSubmit={handleSubmit}>
                <h2>Create Employee</h2>
                <div className="d-flex justify-content-end">
                    <Link to="/" className="btn btn-success btn-sm">Go Back</Link>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="Enter full name" 
                    onChange={e => setValues({ ...values, name: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Job Title</label>
                    <input type="text" className="form-control" placeholder="Enter job title" 
                        onChange={e => setValues({ ...values, title: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    </div>
  );
}

export default Create;
