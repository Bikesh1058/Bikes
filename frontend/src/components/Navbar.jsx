import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Bike,
  CalendarCheck,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Bikes",
      path: "/bikes",
    },
    {
      name: "My Bookings",
      path: "/my-bookings",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <div className="rounded-xl bg-green-600 p-2 text-white">
            <Bike size={25} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Ride<span className="text-green-600">Now</span>
            </h1>

            <p className="text-[10px] font-medium tracking-widest text-slate-500">
              BIKE RENTAL
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-medium ${
                  isActive
                    ? "text-green-600"
                    : "text-slate-700 hover:text-green-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Button */}
        <Link
          to="/bikes"
          className="hidden items-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700 md:flex"
        >
          <CalendarCheck size={18} />
          Book Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-medium ${
                    isActive
                      ? "bg-green-50 text-green-600"
                      : "text-slate-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/bikes"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white"
            >
              <CalendarCheck size={18} />
              Book Now
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;