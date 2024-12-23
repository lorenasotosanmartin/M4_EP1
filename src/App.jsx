import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './views/Home';
import Services from './views/Services';
import Contact from './views/Contact';
import Register from './views/register';
import Appointment from './views/appointment';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <Router>
    <Header/>
      <Routes>
        <Route path="*" element ={<Home/>} />
        <Route path="/home" element ={<Home/>} />
        <Route path="/services" element ={<Services/>} />
        <Route path="/contact" element ={<Contact/>} />
        <Route path="/register" element ={<Register/>} />
        <Route path="/appointment" element ={<Appointment/>} />
      </Routes>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;  

