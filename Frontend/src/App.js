import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Homepage from './components/homepage/homepage.component';
// // import Colorfulpage from ' ./components/Colorfulpage';
// // import '.App.css';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import Aboutus from './components/aboutus.component';
import Contactus from './components/contactus.component';
import Header from './components/header'
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="container-fluid px-1">
        <Header></Header>
        <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/about-us" element={<Aboutus />} />
                <Route path="/contact-us" element={<Contactus />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
