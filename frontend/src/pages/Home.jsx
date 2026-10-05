import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bike,
  ShieldCheck,
  WalletCards,
  Headphones,
} from "lucide-react";

import Hero from "../components/Hero";
import BikeCard from "../components/BikeCard";
import { bikes } from "../data/bikes";

const Home = () => {
  return (
    <>
      <Hero />

      {/* Featured Bikes */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <p className="font-semibold uppercase tracking-wider text-green-600">
                Our Collection
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Popular Bikes
              </h2>

              <p className="mt-3 max-w-xl text-slate-500">
                Choose from our collection of well-maintained
                bikes and start your journey today.
              </p>
            </div>

            <Link
              to="/bikes"
              className="flex items-center gap-2 font-semibold text-green-600 hover:text-green-700"
            >
              View All Bikes
              <ArrowRight size={18} />
            </Link>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {bikes.slice(0, 3).map((bike) => (
              <BikeCard
                key={bike.id}
                bike={bike}
              />
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <p className="font-semibold uppercase tracking-wider text-green-600">
              Why Ride With Us
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Everything You Need For A Great Ride
            </h2>

            <p className="mt-4 text-slate-500">
              We make renting a bike simple, transparent and
              convenient.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-green-50 p-3 text-green-600">
                <ShieldCheck size={26} />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Safe & Reliable
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                All our bikes are regularly maintained and
                inspected before every rental.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-green-50 p-3 text-green-600">
                <WalletCards size={26} />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                Affordable Pricing
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                Transparent pricing with no hidden charges.
                Pick a bike that fits your budget.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-green-50 p-3 text-green-600">
                <Headphones size={26} />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                24/7 Support
              </h3>

              <p className="mt-3 leading-7 text-slate-500">
                Our support team is always ready to help you
                with your rental.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600">

        <div className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8">

          <Bike
            className="mx-auto text-white"
            size={42}
          />

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Ready For Your Next Adventure?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-green-100">
            Choose your bike, select your dates and hit the
            road.
          </p>

          <Link
            to="/bikes"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-green-600 hover:bg-green-50"
          >
            Book A Bike
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>
    </>
  );
};

export default Home;