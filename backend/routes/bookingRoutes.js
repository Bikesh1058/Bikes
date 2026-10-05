import express from "express";

import {
  createBooking,
  getBookings,
  getBookingById,
  deleteBooking,
} from "../controllers/bookingController.js";

const router = express.Router();


// Create booking
router.post("/", createBooking);


// Get all bookings
router.get("/", getBookings);


// Get single booking
router.get("/:id", getBookingById);


// Delete booking
router.delete("/:id", deleteBooking);


export default router;