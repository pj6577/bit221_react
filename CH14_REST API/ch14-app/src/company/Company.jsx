import React, { useState } from 'react';
import axios from 'axios';

const Company = () => {
const SERVER_URL = "http://localhost:8080/company";
const [data, setData] = useState({
  "name" :"",
  "address" : ""
});

const handelSubmit =(e)=>{
  e.preventDefault();
  
    axios({
    url : SERVER_URL,
    method: 'post',
    data:data
  }).then(res=>console.log(res.data));
}
  return (
    <div className='container mt-5'>
      company
      <hr />
      <form onSubmit={handelSubmit}>
      <input className='form-control w-25 mb-2' type="text" placeholder='name' 
      name='name' 
      onChange={(e)=>{setData({...data, name:e.target.value})}}
      />
      <input className='form-control w-25 mb-2' type="text" placeholder='address' 
      name='address'
      onChange={(e)=>{setData({...data, address:e.target.value})}}
      />
      <button className='btn btn-info' type='submit'>등록</button>
      </form>
    </div>
  );
};

export default Company;