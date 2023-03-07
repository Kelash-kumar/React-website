import React from "react";
// import {   Route,Switch } from 'react-router-dom';
import { Routes, Route ,Navigate} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import NavBar from "./NavBar";

const App = () => {
  return (
    <>
    <NavBar/>
      {/* work same as switch */}
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to ="/"/>} />
      </Routes>
    </>
  );
};

export default App;
