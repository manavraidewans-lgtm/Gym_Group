import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-16 flex items-center justify-between px-5 bg-green-200">

      <div className="logo">
        <Link to="/">
          MyLogo
        </Link>
      </div>

      <div className="links flex gap-8">

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

    </nav>
  );
}

export default Navbar;