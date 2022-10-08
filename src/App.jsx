import React from "react";
import { BrowserRouter as Router , Routes  , Route  } from 'react-router-dom';
import About from "./components/About Us/About";
import Contact from "./components/Contact Us/Contact";
import Checkout from "./components/Home-Page/Checkout";
import Home from "./components/Home-Page/Home";
import ElectronicsCat from "./components/Home-Page/ElectronicsCat";
import ClothesCat from "./components/Home-Page/ClothesCat";
import PerfumesCat from "./components/Home-Page/PerfumesCat";
import SportingCat from "./components/Home-Page/SportingCat";
import Footer from "./components/Home-Page/Footer";



function App() {
  return (
      <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/ele-cat" element={<ElectronicsCat/>}/>
          <Route path="/clo-cat" element={<ClothesCat/>}/>
          <Route path="/per-cat" element={<PerfumesCat/>}/>
          <Route path="/spo-cat" element={<SportingCat/>}/>
        </Routes>
        <Footer/>
    </div>
      </Router>
  );
}

export default App;
