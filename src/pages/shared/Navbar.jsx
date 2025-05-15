import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import "./Navbar.css"; // Import your CSS file for custom styles

const Navbar = () => {
  const Links = (
    <>
      <ul className="menu menu-horizontal px-1 gap-4 text-sm font-semibold">
        <li>
          <NavLink to="/" >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT US</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">DASHBOARD</NavLink>
        </li>
        <li>
          <NavLink to="/menu">OUR MENU</NavLink>
        </li>
        <li>
          <NavLink to="/order/salad">OUR SHOP</NavLink>
        </li>
      </ul>
    </>
  );
  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100 opacity-80 bg-black fixed z-10 max-w-screen-xl mx-auto px-4 lg:px-2 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <div className="flex-1">
            <Link to="/" className="text-xl font-bold leading-4">
              BISTRO BOSS
              <br />
              <span className="text-sm tracking-widest font-normal">
                RESTAURANT
              </span>
            </Link>
          </div>
        </div>
        {/* CENTER part*/}
        <div className="navbar justify-end hidden lg:flex">{Links}</div>
        <div className="navbar-end w-1/4">
          <div className="flex items-center gap-4">
            {/* Cart with badge */}
            <NavLink to="/cart" className="relative">
              <FaShoppingCart className="text-xl" />
              <span className="badge badge-error badge-sm absolute -top-2 -right-2">
                7
              </span>
            </NavLink>

            {/* Sign out + user icon */}
            <button className="flex items-center gap-1">
              <span>SIGN OUT</span>
              <FaUserCircle className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
