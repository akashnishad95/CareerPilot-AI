import React from 'react';
import {useNavigate,Link} from "react-router";

const Register = () => {
     const navigate = useNavigate();


    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  }

  return (
    <main>
      <div className="form_container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input_group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" />
          </div>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button className="button btn-primary" type="submit">Register</button>
        </form>
         <p>Already have an account? <Link to="/login">Login</Link></p> 
      </div>
    </main>
  )
}

export default Register;