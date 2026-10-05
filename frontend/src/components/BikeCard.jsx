import { Link } from "react-router-dom";
import {
  Star,
  Gauge,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const BikeCard = ({ bike }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-56 overflow-hidden">

        <img
          src={bike.image}
          alt={bike.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-700 shadow">
          {bike.category}
        </div>

        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">
          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />
          {bike.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-bold text-slate-900">
          {bike.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {bike.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

          <div>
            <span className="text-2xl font-bold text-green-600">
              Rs. {bike.price}
            </span>

            <span className="text-sm text-slate-500">
              /day
            </span>
          </div>

          <Link
            to={`/booking/${bike.id}`}
            className="flex items-center gap-1 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-600"
          >
            Book
            <ArrowRight size={16} />
          </Link>

        </div>

      </div>
    </div>
  );
};

export default BikeCard;