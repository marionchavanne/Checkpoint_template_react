import React from "react";
import { Routes, Route } from "react-router-dom";
import LocationCard from "../Pages/LocationCard";
import Contact from "../Pages/Contact";

function Router() {
  return (
    <Routes>
      <Route path="/location" element={<LocationCard />} />
      <Route path="/" element />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;
