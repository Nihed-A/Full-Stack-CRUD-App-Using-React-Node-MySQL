import axios from 'axios';
import React , { useState }from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function UpdateStudent() {

    const [Name, setName]= useState('')
    const [Email, setEmail]= useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:4000/update/'+id, {Name, Email})
        .then(res => {
            console.log(res);
            navigate('/');

        }).catch(err => console.log(err));
    }
    return (
    
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
          <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
          <h2>Update Student</h2>
     
            <div>
              <label htmlFor="Name">Name:</label>
              <input
                type="text"
                placeholder='Enter Name'
                className='form-control'
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="Email">Email:</label>
              <input
                type="Email"
                placeholder='Enter Email'
                className='form-control'
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <button type="btn btn-success">Update</button>
          </form>
        </div>
        </div>
      );
}

export default UpdateStudent;