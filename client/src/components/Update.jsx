import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios';

function Update() {

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
    axios.get(`http://localhost:3000/read/${id}`)
    .then(res => {
        console.log(res)
        setValues({...values, name: res.data[0].full_name, title: res.data[0].job_title });
    })
    .catch(err => console.log(err));
    }, [])

    const [values, setValues] = useState({
        name: '',
        title: ''
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/update/${id}`, values)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3"> 
                <form onSubmit={handleUpdate}>
                    <h2>Update Employee</h2>
                    <div className="d-flex justify-content-end">
                        <Link to="/" className="btn btn-success btn-sm">Go Back</Link>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Full Name</label>
                        <input type="text" className="form-control" placeholder="Enter full name" value={values.name}
                    onChange={e => setValues({ ...values, name: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Job Title</label>
                        <input type="text" className="form-control" placeholder="Enter job title" value={values.title}
                    onChange={e => setValues({ ...values, title: e.target.value })} />
                    </div>
                    <button className="btn btn-success btn-sm">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Update;