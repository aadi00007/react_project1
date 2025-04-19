import React from 'react';
import './App.css'; // Optional: Link to your CSS file
import Navbar from './components/Navbar.jsx';
import AboutUs from './components/AboutUs.jsx';
import Product from './components/Products.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Contactinfo from './components/Contactinfo.jsx';
import Contactform from './components/Contactform.jsx';
import { Routes, Route, Link } from 'react-router-dom'; 
import JobsLayout from './components/JobsLayout.jsx';
import Jobs from './components/Jobs.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path ="/contact" element={<Contact />} >
            <Route  path='info' element={<Contactinfo />}/>
            <Route path='form' element={<Contactform />} />
         </Route>
         <Route path='jobs' element={<JobsLayout/>}>
         <Route index element={<Jobs/>} />
         

         </Route>
            
      </Routes>
    </div>
  );
}

export default App;