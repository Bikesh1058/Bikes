import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bike,
  ShieldCheck,
  Clock3,
  MapPin,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558980664-10ea7f8d1b2f?auto=format&fit=crop&w=1800&q=80"
          alt="Motorcycle"
          className="h-full w-full object-cover opacity-30"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">

        <div className="max-w-3xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400 ring-1 ring-green-500/30">
            <Bike size={17} />
            Premium Bike Rental
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
            Your Ride.
            <br />
            Your{" "}
            <span className="text-green-500">
              Adventure.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Discover premium bikes at affordable prices. Book your
            favorite ride and explore the city without limits.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              to="/bikes"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-4 font-bold text-white hover:bg-green-700"
            >
              Book Your Ride
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/bikes"
              className="rounded-xl border border-white/30 px-7 py-4 text-center font-bold text-white hover:bg-white/10"
            >
              Explore Bikes
            </Link>

          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">

            <div className="flex items-center gap-3 text-white">
              <div className="rounded-lg bg-white/10 p-3">
                <ShieldCheck size={22} />
              </div>

              <div>
                <p className="font-semibold">Safe & Secure</p>
                <p className="text-sm text-slate-400">
                  Verified bikes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white">
              <div className="rounded-lg bg-white/10 p-3">
                <Clock3 size={22} />
              </div>

              <div>
                <p className="font-semibold">Quick Booking</p>
                <p className="text-sm text-slate-400">
                  Book in minutes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white">
              <div className="rounded-lg bg-white/10 p-3">
                <MapPin size={22} />
              </div>

              <div>
                <p className="font-semibold">Easy Pickup</p>
                <p className="text-sm text-slate-400">
                  Convenient locations
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;