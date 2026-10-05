import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import MyBookings from "./pages/MyBookings";

const App = () => {
  return (
    <BrowserRouter>

      <div className="min-h-screen">

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/bikes"
            element={<Bikes />}
          />

          <Route
            path="/booking/:id"
            element={<Booking />}
          />

          <Route
            path="/my-bookings"
            element={<MyBookings />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
};

export default App;