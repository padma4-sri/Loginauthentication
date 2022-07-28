import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";
import image from "../../images/image1.webp"


import './Login.css';

function Login() {
	const nav = useNavigate ()

  const [name, setName] = useState('');
  const [passowrd, setPassword] = useState('');
	const [errorMessage, seterrorMessage] = React.useState('');

	React.useEffect(()=>{
		if(localStorage.getItem('auth')) nav('/')
	},[])
	const Login = e => {
		e.preventDefault();
		if(name !== 'padma' || passowrd !== '12345') return seterrorMessage('Invalid email or password');
		nav('/')
		localStorage.setItem('auth', true)
	};
  return (
   
    <div className="form  bg" style={{
      background: `url(${image})`,
   
    }}>
      <h3 className='text-center mt-5'>Login</h3>
      <form className='form' onSubmit={Login}>
							{errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
        <div class="form-group">
          <label >UserName</label>
          <input type="text" class="form-control" placeholder="Enter Name" onChange={e=>setName(e.target.value)} required />
        </div>
        <div class="form-group">
          <label >Password</label>
          <input type="password" class="form-control" placeholder="Enter Password" onChange={e=>setPassword(e.target.value)} required />
        </div>
        <div class="form-group">
         <button className="btn btn-primary btn-center">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
