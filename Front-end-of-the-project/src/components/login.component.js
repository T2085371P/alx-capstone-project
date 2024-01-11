import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class Login extends Component {
  render() {
    return (
      <form>
        <h3 id='h3'>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
          <div className="d-grid">
        <Link to='/dash-board'>
        <button type="submit" className="btn btn-primary">
         Sign In
        </button>
      </Link>
        </div>
        <p className="Not-Student-yet">
          Not a Registered Yet? <Link className="nav-link" to={'/sign-up'}>SignUp</Link>
        </p>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}