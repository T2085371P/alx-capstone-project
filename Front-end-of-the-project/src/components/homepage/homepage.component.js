import image from './images/Examiner1.jpg';
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './styles.css'
export default class Homepage extends Component {
  render() {
    return (
        <div className='home'>
            
            <h1>ANYEXAM</h1>
           
        <img src={image} className="App-logo" alt="logo" /> <br/>
        <Link to="/take-test">
        <button type="submit" className="btn btn-primary">
            Take Test
          </button>
          </Link>
      </div>
    )
  }
}