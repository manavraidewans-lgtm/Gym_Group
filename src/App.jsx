import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Class from "./Pages/Class.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />

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