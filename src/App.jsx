import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

import "remixicon/fonts/remixicon.css";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Class from "./Pages/Class.jsx";
import Contact from "./Pages/Contact.jsx";



function App() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            document.title = "Home | The Gym Group";
        } else if (location.pathname === "/about") {
            document.title = "About Us | Here you will get to know more about me.";
        } else if (location.pathname === "/classes") {
            document.title = "Explore Our Classes | The Gym Group";
        } else if (location.pathname === "/contact") {
            document.title = "Contact Us | The Gym Group";
        }
    }, [location.pathname]);


    // Back to top
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="w-full max-w-full overflow-x-hidden">

                {/* Navbar */}
                <Navbar />

                {/* Pages */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/classes" element={<Class />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                {/* Back To Top */}
                <div className="w-full px-4 sm:px-6 py-6 sm:py-8 flex justify-center items-center">

                    <button
                        onClick={handleBackToTop}
                        className="w-full sm:w-auto px-8 sm:px-12 md:px-16 py-3 sm:py-3.5 bg-[#0a0862] rounded-full text-[#d6d9dd] font-extrabold text-sm sm:text-base transition-colors duration-300 hover:bg-[#110dd8] cursor-pointer flex justify-center items-center gap-2.5"
                    >
                        <i className="ri-arrow-up-line"></i>

                        <span>
                            Back To Top 
                            <i class="ri-arrow-up-fill"></i>
                        </span>
                    </button>

                </div>

                {/* Footer */}
                <Footer />

            </div>
        </>
    );
}

export default App;