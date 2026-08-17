import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav className="h-15 flex items-center justify-between px-5 bg-[#0050ef] overflow-hidden w-full">

      <div className="logo ">
        
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-10 w-auto object-contain" />
        </Link>
      </div>

      

      <div className="links flex gap-8 text-[#d2def7]">

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/classes">
          Classes
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>

      <div className="flex justify-centre itens-centre gap-3 text-[#d2def7]">
        <button>Login</button>
        <button>Signup</button>
      </div>

      <div className="hidden">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </nav>
  );
}

export default Navbar;