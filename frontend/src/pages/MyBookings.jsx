import { useEffect, useState } from "react";

import {
  Bike,
  CalendarDays,
  MapPin,
  Trash2,
} from "lucide-react";

import toast from "react-hot-toast";

import {
  getBookings,
  deleteBooking,
} from "../services/bookingService";


const MyBookings = () => {

  const [bookings, setBookings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  // ============================================
  // FETCH BOOKINGS
  // ============================================

  const fetchBookings = async () => {

    try {

      setLoading(true);

      const response =
        await getBookings();

      setBookings(
        response.bookings || []
      );

    } catch (error) {

      console.error(
        "Fetch bookings error:",
        error
      );

      toast.error(
        "Failed to load bookings"
      );

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {

    fetchBookings();

  }, []);


  // ============================================
  // DELETE BOOKING
  // ============================================

  const handleDelete = async (
    id
  ) => {

    try {

      await deleteBooking(id);

      toast.success(
        "Booking removed successfully"
      );

      // Refresh bookings
      fetchBookings();

    } catch (error) {

      console.error(
        "Delete booking error:",
        error
      );

      toast.error(
        "Failed to delete booking"
      );

    }

  };


  // ============================================
  // LOADING
  // ============================================

  if (loading) {

    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-slate-50">

        <div className="text-center">

          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-green-600" />

          <p className="mt-4 text-slate-500">
            Loading bookings...
          </p>

        </div>

      </main>
    );

  }


  return (
    <main className="min-h-[70vh] bg-slate-50 py-16">

      <div className="mx-auto max-w-5xl px-5 lg:px-8">


        {/* Header */}
        <div className="mb-10">

          <p className="font-semibold uppercase tracking-wider text-green-600">
            Your Rides
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            My Bookings
          </h1>

          <p className="mt-3 text-slate-500">
            View and manage your ride bookings.
          </p>

        </div>


        {/* No bookings */}
        {bookings.length === 0 ? (

          <div className="rounded-2xl bg-white px-6 py-20 text-center shadow-sm">

            <Bike
              size={50}
              className="mx-auto text-slate-300"
            />

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              No bookings yet
            </h2>

            <p className="mt-2 text-slate-500">
              Your booked rides will appear here.
            </p>

          </div>

        ) : (


          /* Booking List */
          <div className="space-y-5">

            {bookings.map(
              (booking) => (

                <div
                  key={booking._id}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >

                  <div className="flex flex-col justify-between gap-5 md:flex-row">


                    {/* Booking Information */}
                    <div>

                      <div className="flex items-center gap-3">

                        <div className="rounded-xl bg-green-50 p-3 text-green-600">
                          <Bike size={24} />
                        </div>

                        <div>

                          <h2 className="text-xl font-bold text-slate-900">
                            {booking.bikeName}
                          </h2>

                          <span className="text-sm text-slate-500">
                            Booking #{booking._id.slice(-6)}
                          </span>

                        </div>

                      </div>


                      <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">


                        {/* Dates */}
                        <div className="flex items-center gap-2">

                          <CalendarDays
                            size={17}
                            className="text-green-600"
                          />

                          {new Date(
                            booking.startDate
                          ).toLocaleDateString()}

                          {" → "}

                          {new Date(
                            booking.endDate
                          ).toLocaleDateString()}

                        </div>


                        {/* Location */}
                        <div className="flex items-center gap-2">

                          <MapPin
                            size={17}
                            className="text-green-600"
                          />

                          {booking.pickupLocation}

                        </div>

                      </div>

                    </div>


                    {/* Status & Delete */}
                    <div className="flex items-center justify-between gap-5 md:flex-col md:items-end">


                      {/* Status */}
                      <div className="text-right">

                        <p className="text-sm text-slate-500">
                          Status
                        </p>

                        <span
                          className={`mt-1 inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                            booking.status ===
                            "Confirmed"
                              ? "bg-green-50 text-green-700"
                              : booking.status ===
                                "Rejected"
                              ? "bg-red-50 text-red-700"
                              : "bg-yellow-50 text-yellow-700"
                          }`}
                        >
                          {booking.status}
                        </span>

                      </div>


                      {/* Delete */}
                      <button
                        onClick={() =>
                          handleDelete(
                            booking._id
                          )
                        }
                        className="flex items-center gap-2 rounded-lg border border-red-100 px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
                      >

                        <Trash2 size={16} />

                        Remove

                      </button>

                    </div>

                  </div>

                </div>

              )
            )}

          </div>

        )}

      </div>

    </main>
  );
};

export default MyBookings;