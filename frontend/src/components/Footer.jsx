import { Link } from "react-router-dom";
import {
  Bike,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="rounded-xl bg-green-600 p-2.5">
                <Bike size={26} />
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Ride
                  <span className="text-green-500">
                    Now
                  </span>
                </h2>

                <p className="text-[10px] font-medium tracking-[0.25em] text-slate-400">
                  BIKE RENTAL
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Your trusted partner for comfortable,
              affordable and memorable bike rides.
              Choose your bike and start your adventure today.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white hover:bg-green-600"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white hover:bg-green-600"
              >
                ig
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white hover:bg-green-600"
              >
                X
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-5 text-lg font-bold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-slate-400 hover:text-green-500"
              >
                Home
              </Link>

              <Link
                to="/bikes"
                className="text-slate-400 hover:text-green-500"
              >
                Our Bikes
              </Link>

              <Link
                to="/my-bookings"
                className="text-slate-400 hover:text-green-500"
              >
                My Bookings
              </Link>

              <Link
                to="/contact"
                className="text-slate-400 hover:text-green-500"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Services */}
          <div>

            <h3 className="mb-5 text-lg font-bold">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-slate-400">

              <p>Bike Rental</p>

              <p>Daily Rental</p>

              <p>Weekly Rental</p>

              <p>Long Term Rental</p>

              <p>Adventure Rides</p>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 text-lg font-bold">
              Contact Us
            </h3>

            <div className="flex flex-col gap-5">

              {/* Address */}
              <div className="flex gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600">
                  <MapPin size={19} />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Address
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    Kathmandu, Nepal
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600">
                  <Phone size={19} />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    +977 9800000000
                  </p>
                </div>

              </div>

              {/* Email */}
              <div className="flex gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600">
                  <Mail size={19} />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-400">
                    hello@ridenow.com
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} RideNow.
            All rights reserved.
          </p>

          <Link
            to="/bikes"
            className="flex items-center gap-1 text-sm font-semibold text-green-500 hover:text-green-400"
          >
            Book a Ride
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;