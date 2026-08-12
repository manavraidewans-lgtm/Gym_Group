import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/hero.jsx";


import "remixicon/fonts/remixicon.css"


import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Class from "./Pages/Class.jsx";
import Contact from "./Pages/Contact.jsx";





function App() {
  return (
    <>
      <Navbar />

      <div className="h-12 w-full bg-[#b2ff01] flex justify-center items-center gap-3 ">
          <i class="ri-discount-percent-line text-[2rem] text-[#344f00] font-extrabold"></i>
          <h2 className="text-[#344f00] font-extrabold text-[1.6rem]">Save for 6 months</h2>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Class />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      
    </>
  );
}

export default App;