import React, { Component } from 'react';
import './index.css'
class QuenMatKhau extends Component {
    render() {
        return (
          <div className="container">
            <div className="container-wrapper">
              <div className="logo">
                <img src="./assets/dang-nhap/logo.svg" alt="logo" />
              </div>
              <div className="login">
                <form action className="login-wrapper">
                  <h1 className="login-title">Forgot Passwod</h1>
                  <div className="login-description">
                    Enter the email address you used to register, and we will
                    send you an email to recover your password in no time
                  </div>
                  <div className="login-contain">
                    <input type="text" className="email" placeholder="Email" />
                    <button className="btn login-button">Login</button>
                    <span>
                      <a href="dang-nhap.html">Back to Login</a> or{" "}
                      <a href="dang-ky.html">Create Account</a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default QuenMatKhau;