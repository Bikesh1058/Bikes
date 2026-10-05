import { useState } from "react";
import BikeCard from "../components/BikeCard";
import { bikes } from "../data/bikes";
import { Search } from "lucide-react";

const Bikes = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Sport",
    "Cruiser",
    "Street",
  ];

  const filteredBikes = bikes.filter((bike) => {

    const matchesSearch =
      bike.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      bike.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main>

      {/* Header */}
      <section className="bg-slate-950 py-16">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <p className="font-semibold uppercase tracking-wider text-green-500">
            Our Fleet
          </p>

          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Choose Your Ride
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Browse our collection of premium and well-maintained
            bikes.
          </p>

        </div>

      </section>

      {/* Bikes */}
      <section className="py-16">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          {/* Search & Filters */}
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="relative max-w-md flex-1">

              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search bikes..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
              />

            </div>

            <div className="flex flex-wrap gap-2">

              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-lg px-5 py-3 font-medium ${
                    category === item
                      ? "bg-green-600 text-white"
                      : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* Cards */}
          {filteredBikes.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredBikes.map((bike) => (
                <BikeCard
                  key={bike.id}
                  bike={bike}
                />
              ))}

            </div>
          ) : (
            <div className="py-20 text-center">
              <h2 className="text-2xl font-bold text-slate-900">
                No bikes found
              </h2>

              <p className="mt-2 text-slate-500">
                Try another search or category.
              </p>
            </div>
          )}

        </div>

      </section>

    </main>
  );
};

export default Bikes;