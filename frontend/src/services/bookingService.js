import axios from "axios";

const API_URL = "http://localhost:3000/api";


// ============================================
// CREATE BOOKING
// ============================================

export const createBooking = async (
  bookingData
) => {
  const response = await axios.post(
    `${API_URL}/bookings`,
    bookingData
  );

  return response.data;
};


// ============================================
// GET ALL BOOKINGS
// ============================================

export const getBookings = async () => {
  const response = await axios.get(
    `${API_URL}/bookings`
  );

  return response.data;
};


// ============================================
// GET SINGLE BOOKING
// ============================================

export const getBookingById = async (
  id
) => {
  const response = await axios.get(
    `${API_URL}/bookings/${id}`
  );

  return response.data;
};


// ============================================
// DELETE BOOKING
// ============================================

export const deleteBooking = async (
  id
) => {
  const response = await axios.delete(
    `${API_URL}/bookings/${id}`
  );

  return response.data;
};