import React,{useState} from 'react';
import {useNavigate,Link} from "react-router";
import './auth_form.scss';
import { useAuth } from '../hooks/useAuth.jsx';



 
const Login = () => {
 const {loading,handleLogin}=useAuth()
 const navigate=useNavigate()

 const [email,setEmail]=useState("")
 const [password,setPassword]=useState("")


 
  const handleSubmit = (e) => {
    e.preventDefault();
  
     handleLogin({email,password})
    // Handle login logic here
    navigate('/');
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div className="form_container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input onchange={(e)=>setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input onchange={(e)=>setPassword(e.target.value)} type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button className="button btn-primary" type="submit">Login</button>
        </form>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </main>
  )
}

export default Login