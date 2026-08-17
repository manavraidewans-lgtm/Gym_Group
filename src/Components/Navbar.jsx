import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Navbar() {
    return (
        <nav className="h-15 w-full bg-[#0050ef] flex items-center justify-between px-4 sm:px-6 lg:px-8 relative z-50">

            {/* Logo */}
            <div>
                <Link to="/">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-9 sm:h-10 w-auto object-contain"
                    />
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-5 lg:gap-8 text-[#d2def7] font-medium">

                <Link
                    to="/"
                    className="hover:text-white transition"
                >
                    Home
                </Link>

                <Link
                    to="/about"
                    className="hover:text-white transition"
                >
                    About
                </Link>

                <Link
                    to="/classes"
                    className="hover:text-white transition"
                >
                    Classes
                </Link>

                <Link
                    to="/contact"
                    className="hover:text-white transition"
                >
                    Contact
                </Link>

            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3 text-[#d2def7]">

                <button className="px-4 py-2 rounded-full hover:bg-white/10 hover:text-white transition">
                    Login
                </button>

                <button className="px-4 py-2 rounded-full bg-white text-[#0050ef] font-bold hover:bg-[#d2def7] transition">
                    Signup
                </button>

            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
                aria-label="Open menu"
            >
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
            </button>

        </nav>
    );
}

export default Navbar;