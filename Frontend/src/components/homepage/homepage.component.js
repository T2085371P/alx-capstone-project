import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
export default class Homepage extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          {/* Home introduction */}
          <div>
            <h1>ANYEXAM</h1>
          </div>
          {/* Take exam */}
          <div id='take-exam'>
            <Link to='/exam'>
              <button type="submit" className="btn btn-primary">
                  Take Test
                </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}