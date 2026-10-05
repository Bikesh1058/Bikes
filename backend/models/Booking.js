import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bikeId: {
      type: Number,
      required: [true, "Bike ID is required"],
    },

    bikeName: {
      type: String,
      required: [true, "Bike name is required"],
      trim: true,
    },

    customerName: {
      type: String,
      required: [true, "Customer name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },

    pickupLocation: {
      type: String,
      required: [true, "Pickup location is required"],
      trim: true,
    },

    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },

    endDate: {
      type: Date,
      required: [true, "End date is required"],
    },

    pricePerDay: {
      type: Number,
      required: [true, "Price per day is required"],
    },

    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model(
  "Booking",
  bookingSchema
);

export default Booking;