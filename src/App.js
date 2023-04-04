import React from "react";
import Header from "./Pages/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeSlides from "./Pages/HomeSlide/HomeSlides";
import HomeComps from "./Pages/HomeSections/HomeComps";
import ContactForm from "./Pages/Contactpage/ContactForm";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
        {/* <Route path='/' element={<HomeSlides />} />   */}
        <Route path='/' element={<HomeComps />} />  
        <Route path='/contact' element={<ContactForm />} />  
         
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
