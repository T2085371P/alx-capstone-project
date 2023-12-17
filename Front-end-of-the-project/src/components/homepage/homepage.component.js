import image from './images/Examiner1.jpg';
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './styles.css'
export default class Homepage extends Component {
  render() {
    return (
        <div className='home'>
            <h2>Welcome to</h2>
            <h1>VATAD CBT Centre</h1>
            <p id='p'>Where we focus on unlocking potential and empowering success.</p>
            <p id='p'>Our approach combines user-friendly design with top-notch adaptive learning for excellence.</p>
        <img src={image} className="App-logo" alt="logo" /> <br/>
        <Link to="/sign-in">
        <button type="submit" className="btn btn-primary">
            Take Test
          </button>
          </Link>
      </div>
    )
  }
}