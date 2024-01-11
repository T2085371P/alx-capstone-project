import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Homepage from './components/homepage/homepage.component';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Aboutus from './components/aboutus.component';
import Contactus from './components/contactus.component';
import Footer from './components/Footer';
import Taketest from './components/taketest.component';
import Dashboard from './components/dashboard.component'
function App() {
  return (
    <Router>
      <div className="App">
        
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
            ANYEXAM
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/take-test'}>
                    Student
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/contact-us'}>
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/about-us'}>
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/about-us" element={<Aboutus />} />
              <Route path="/contact-us" element={<Contactus />} />
              <Route path="/take-test" element={<Taketest />} />
              <Route path="/dash-board" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
