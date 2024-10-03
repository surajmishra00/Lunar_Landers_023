import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import ContactPage from "../pages/Contact";
import About from "../pages/About";

import { Pricing } from "../pages/Pricing";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>
    </div>
  );
}

export default AllRoutes;
