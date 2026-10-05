import Booking from "../models/Booking.js";

// ============================================
// CREATE BOOKING
// POST /api/bookings
// ============================================

export const createBooking = async (req, res, next) => {
  try {
    const {
      bikeId,
      bikeName,
      customerName,
      email,
      phone,
      pickupLocation,
      startDate,
      endDate,
      pricePerDay,
    } = req.body;

    // Basic validation
    if (
      !bikeId ||
      !bikeName ||
      !customerName ||
      !email ||
      !phone ||
      !pickupLocation ||
      !startDate ||
      !endDate ||
      !pricePerDay
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }

    // Check date
    if (
      new Date(endDate) <
      new Date(startDate)
    ) {
      return res.status(400).json({
        success: false,
        message:
          "End date cannot be before start date",
      });
    }

    // Create booking
    const booking = await Booking.create({
      bikeId,
      bikeName,
      customerName,
      email,
      phone,
      pickupLocation,
      startDate,
      endDate,
      pricePerDay,
      status: "Pending",
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    next(error);
  }
};


// ============================================
// GET ALL BOOKINGS
// GET /api/bookings
// ============================================

export const getBookings = async (
  req,
  res,
  next
) => {
  try {
    const bookings = await Booking.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    next(error);
  }
};


// ============================================
// GET SINGLE BOOKING
// GET /api/bookings/:id
// ============================================

export const getBookingById = async (
  req,
  res,
  next
) => {
  try {
    const booking = await Booking.findById(
      req.params.id
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    next(error);
  }
};


// ============================================
// DELETE BOOKING
// DELETE /api/bookings/:id
// ============================================

export const deleteBooking = async (
  req,
  res,
  next
) => {
  try {
    const booking = await Booking.findById(
      req.params.id
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    await booking.deleteOne();

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};