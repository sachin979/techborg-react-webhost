import React from 'react';
import './Login.css';
import {useHistory} from 'react-router-dom'

function Login() {
  const history = useHistory()
  return (
    <div>
      <div className="loginParentDiv">
        
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>history.push('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
