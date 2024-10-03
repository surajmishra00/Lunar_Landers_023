import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import { Pricing } from "../pages/Pricing";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        
      </Routes>
    </div>
  );
}

export default AllRoutes;
