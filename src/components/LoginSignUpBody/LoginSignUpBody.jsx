import React, { useState } from 'react';
import './LoginSignUpBody.scss';

const LoginSignUpBody = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-body">
      {isLogin ? (
        <div className="login-section">
          <h2>Sign In Here</h2>
          <label>Email address</label>
          <input type="email" placeholder="name@domain.com" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button>Sign In</button>
          <p>
            Don't have an account,{' '}
            <span onClick={toggleLoginRegister}>Register</span>.
          </p>
        </div>
      ) : (
        <div className="register-section">
          <h2>Register Here</h2>
          <label>Email address</label>
          <input type="email" placeholder="name@domain.com" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <label>Confirm Password</label>
          <input type="password" placeholder="Re-enter your password" />
          <button>Register</button>
          <p>
            Already have an account?{' '}
            <span onClick={toggleLoginRegister}>Log in</span>.
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginSignUpBody;
