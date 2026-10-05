import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  CalendarDays,
  User,
  Mail,
  Phone,
  MapPin,
  Bike,
  ArrowLeft,
} from "lucide-react";

import toast from "react-hot-toast";

import { bikes } from "../data/bikes";
import { createBooking } from "../services/bookingService";


const Booking = () => {

  const { id } = useParams();

  const navigate = useNavigate();


  // Find selected bike
  const bike = bikes.find(
    (item) => item.id === Number(id)
  );


  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    startDate: "",
    endDate: "",
  });


  // If bike doesn't exist
  if (!bike) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-slate-900">
            Bike Not Found
          </h1>

          <button
            onClick={() => navigate("/bikes")}
            className="mt-5 rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
          >
            Browse Bikes
          </button>

        </div>

      </div>
    );
  }


  // ============================================
  // INPUT CHANGE
  // ============================================

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // ============================================
  // SUBMIT BOOKING
  // ============================================

  const handleSubmit = async (e) => {

    e.preventDefault();


    // Frontend validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.pickupLocation ||
      !formData.startDate ||
      !formData.endDate
    ) {

      toast.error(
        "Please fill all fields"
      );

      return;
    }


    // Date validation
    if (
      new Date(formData.endDate) <
      new Date(formData.startDate)
    ) {

      toast.error(
        "End date cannot be before start date"
      );

      return;
    }


    try {

      // Prepare API data
      const bookingData = {

        bikeId: bike.id,

        bikeName: bike.name,

        customerName:
          formData.name,

        email:
          formData.email,

        phone:
          formData.phone,

        pickupLocation:
          formData.pickupLocation,

        startDate:
          formData.startDate,

        endDate:
          formData.endDate,

        pricePerDay:
          bike.price,

      };


      // Send to backend
      const response =
        await createBooking(
          bookingData
        );


      console.log(
        "Booking response:",
        response
      );


      toast.success(
        "Ride booked successfully!"
      );


      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        pickupLocation: "",
        startDate: "",
        endDate: "",
      });


      // Go to bookings page
      setTimeout(() => {

        navigate("/my-bookings");

      }, 800);


    } catch (error) {

      console.error(
        "Booking error:",
        error
      );


      const message =
        error.response?.data?.message ||
        "Something went wrong while booking";


      toast.error(message);

    }

  };


  return (
    <main className="bg-slate-50 py-12">

      <div className="mx-auto max-w-6xl px-5 lg:px-8">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-7 flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-green-600"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>


        <div className="grid gap-8 lg:grid-cols-5">


          {/* =====================================
              BIKE PREVIEW
          ====================================== */}

          <div className="lg:col-span-2">

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

              <img
                src={bike.image}
                alt={bike.name}
                className="h-72 w-full object-cover"
              />


              <div className="p-6">

                <div className="mb-3 flex items-center gap-2 text-green-600">

                  <Bike size={20} />

                  <span className="font-semibold">
                    {bike.category}
                  </span>

                </div>


                <h1 className="text-2xl font-bold text-slate-900">
                  {bike.name}
                </h1>


                <p className="mt-3 text-slate-500">
                  {bike.description}
                </p>


                <div className="mt-6 border-t border-slate-100 pt-5">

                  <span className="text-3xl font-bold text-green-600">
                    Rs. {bike.price}
                  </span>

                  <span className="text-slate-500">
                    / day
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================
              BOOKING FORM
          ====================================== */}

          <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-3 lg:p-8">

            <h2 className="text-2xl font-bold text-slate-900">
              Book Your Ride
            </h2>

            <p className="mt-2 text-slate-500">
              Fill in your details to request a booking.
            </p>


            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >


              {/* Name */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-slate-200 py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />

                </div>

              </div>


              {/* Email */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-200 py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />

                </div>

              </div>


              {/* Phone */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <div className="relative">

                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="98XXXXXXXX"
                    className="w-full rounded-lg border border-slate-200 py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />

                </div>

              </div>


              {/* Pickup Location */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Pickup Location
                </label>

                <div className="relative">

                  <MapPin
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    name="pickupLocation"
                    value={
                      formData.pickupLocation
                    }
                    onChange={handleChange}
                    placeholder="Enter pickup location"
                    className="w-full rounded-lg border border-slate-200 py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />

                </div>

              </div>


              {/* Dates */}
              <div className="grid gap-5 sm:grid-cols-2">


                {/* Start Date */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Start Date
                  </label>

                  <div className="relative">

                    <CalendarDays
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="date"
                      name="startDate"
                      value={
                        formData.startDate
                      }
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    />

                  </div>

                </div>


                {/* End Date */}
                <div>

                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    End Date
                  </label>

                  <div className="relative">

                    <CalendarDays
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="date"
                      name="endDate"
                      value={
                        formData.endDate
                      }
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 py-3.5 pl-11 pr-4 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100"
                    />

                  </div>

                </div>

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-green-600 py-4 font-bold text-white hover:bg-green-700"
              >
                Confirm Booking
              </button>

            </form>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Booking;