import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login2">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form className='signForm'>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input type="text" name="txt" placeholder="User name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <div className='policy'>
              <input type="checkbox" required/> 
              <div>By continuing, You agree to the terms of use & privacy policy</div>
            </div>
            <button className='btn' type="submit">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form className='signForm'>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <div className='forgetpass'>
              Forget your password?
            </div>
            <button className='btn' type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
