import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import SmoothScroll from "./gsap/SmoothScroll";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </SmoothScroll>
      <Footer />
    </Router>
  );
};

export default App;
