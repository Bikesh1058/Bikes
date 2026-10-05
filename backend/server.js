import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import bookingRoutes from "./routes/bookingRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

import notFoundMiddleware from "./middleware/notFoundMiddleware.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

// Create Express application
const app = express();

// ============================================
// MIDDLEWARE
// ============================================

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// ============================================
// TEST ROUTE
// ============================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "RideNow API is running successfully",
  });
});

// ============================================
// API ROUTES
// ============================================

app.use("/api/bookings", bookingRoutes);

app.use("/api/contact", contactRoutes);

// ============================================
// ERROR HANDLING
// ============================================

app.use(notFoundMiddleware);

app.use(errorMiddleware);

// ============================================
// SERVER
// ============================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});