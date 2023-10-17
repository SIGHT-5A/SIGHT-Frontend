import React, { useState } from 'react';
import './LoginSignUpBody.scss';
import data from './TermsOfService';

const LoginSignUpBody = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isVisiblePolicy, setIsVisiblePolicy] = useState(false);

  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-body">
      {isLogin ? (
        <div className="login-section">
          <h2>Log in to SIGHT</h2>
          <label>Email address</label>
          <input type="email" placeholder="name@domain.com" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button className='primary-button sign-in-button'>Log-In with Email</button>
          <p>
            Don't have an account? {' '}
            <span onClick={toggleLoginRegister}>Register</span>.
          </p>
        </div>
      ) : (
        <div className="register-section">
          {
            isVisiblePolicy &&
            (
              <div className='policy' >
                <div className="policy-content">
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    top: 0,
                    background: '#121316',
                    paddingTop: 20,
                    paddingBottom: 20,
                    borderBottom: "1px solid #747476"
                  }}>
                    <h4
                      style={{
                        margin: 0
                      }}
                    >Terms of Service and Privacy Policy</h4>
                    <div>
                      <i style={{
                        fontSize: 22,
                        cursor: 'pointer'
                      }} className="fa-solid fa-xmark"
                        onClick={() => setIsVisiblePolicy(!isVisiblePolicy)}
                      >
                      </i>
                    </div>
                  </div>
                  <p>
                    By using the SIGHT application, you agree to comply with and be bound by these Terms of Service. If you do not agree to these Terms, please do not use the application.
                  </p>
                  {
                    data.map((item, idx) => (
                      <div style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "flex-start",
                        flexDirection: 'column'
                      }} key={idx}>
                        <h6 style={{
                          color: '#0080ff',
                          margin: 0
                        }}>🔹 {item.title}: </h6>
                        <p style={{
                          marginTop: 3
                        }}>{item.info}</p>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }

          <h2>Register to SIGHT</h2>
          <form action="">
            <label>Email address</label>
            <input type="email" placeholder="name@domain.com" />
            <label>Password</label>
            <input type="password" placeholder="Create new password" />
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter to confirm password" />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", marginTop: 10 }}>
              <input className='check-box' type='checkbox' />
              <label className='check-box-label'>
                By signing up, I agree to &nbsp;
                <span
                  style={{
                    textDecoration: 'underline',
                    color: '#0080ff',
                    cursor: 'pointer'
                  }}
                  onClick={() => setIsVisiblePolicy(!isVisiblePolicy)}>Terms of Use and Privacy Policy.</span>
              </label>
            </div>
            <button type='submit' className='primary-button register-in-button'>Register with Email</button>
          </form>
          <p>
            Already have an account?{' '}
            <span onClick={toggleLoginRegister}>Log in</span>.
          </p>
        </div>
      )
      }
    </div >
  );
};

export default LoginSignUpBody;
