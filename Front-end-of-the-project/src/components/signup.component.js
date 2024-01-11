import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3 id='h3'>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            required
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" required/>
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email" required
          />
        </div>
        <div className="mb-3">
          <label>Organization name</label>
          <input type="text" className="form-control" placeholder="Organization name" required/>
        </div>
  <fieldset className="role">
  <legend>Choose a Role:</legend>
  <div className="custom-control custom-checkbox">
    <input
      type="radio"
      className="custom-control-input"
      id="customCheck1"
      name="role" checked
    />
    <label className="custom-control-label" htmlFor="customCheck1">
      Leader
    </label>
  </div>
  <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="radio"
              className="custom-control-input"
              id="customCheck1"
              name="role"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Staff
            </label>
          </div>
        </div>
</fieldset>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            SignUp
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}