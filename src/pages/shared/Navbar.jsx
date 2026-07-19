import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import "./Navbar.css"; // Import your CSS file for custom styles

const Navbar = () => {
  const Links = (
    <>
      <ul className="menu menu-horizontal px-1 gap-5 text-xs tracking-wide font-semibold text-neutral-200">
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
      <div className="navbar bg-neutral-900/90 backdrop-blur fixed z-10 max-w-screen-xl mx-auto px-4 lg:px-6 text-white shadow-lg shadow-black/20 rounded-b-2xl">
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
              className="menu menu-sm dropdown-content bg-neutral-900 text-neutral-200 rounded-2xl z-[1] mt-3 w-52 p-3 shadow-xl border border-white/10"
            >
              {Links}
            </ul>
          </div>
          <div className="flex-1">
            <Link to="/" className="text-xl font-bold leading-4 text-white">
              BISTRO <span className="text-[#d3502a]">BOSS</span>
              <br />
              <span className="text-[10px] tracking-[0.3em] font-normal text-neutral-400">
                RESTAURANT
              </span>
            </Link>
          </div>
        </div>
        {/* CENTER part*/}
        <div className="navbar justify-end hidden lg:flex">{Links}</div>
        <div className="navbar-end w-1/4">
          <div className="flex items-center gap-5">
            {/* Cart with badge */}
            <NavLink to="/cart" className="relative text-neutral-200 hover:text-white transition-colors">
              <FaShoppingCart className="text-lg" />
              <span className="bg-[#d3502a] text-white text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center absolute -top-2 -right-2">
                7
              </span>
            </NavLink>

            {/* Sign out + user icon */}
            <button className="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-neutral-200 hover:text-white transition-colors">
              <span>SIGN OUT</span>
              <FaUserCircle className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
