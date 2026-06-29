import React from 'react';
import {useNavigate,Link} from "react-router";
import './auth_form.scss';

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  }

  return (
    <main>
      <div className="form_container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <button className="button btn-primary" type="submit">Login</button>
        </form>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </main>
  )
}

export default Login