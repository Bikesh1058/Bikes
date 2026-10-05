import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:3000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to send message"
        );
      }

      toast.success(data.message || "Message sent successfully!");

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      toast.error(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">

        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-wider text-green-600">
            Get In Touch
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Contact Us
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Have questions about renting a bike? We are here
            to help.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Contact Info */}
          <div className="rounded-2xl bg-slate-950 p-8 text-white">

            <h2 className="text-2xl font-bold">
              Let's Talk
            </h2>

            <p className="mt-3 leading-7 text-slate-400">
              Get in touch with our team for bookings,
              questions or support.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4">
                <div className="rounded-lg bg-green-600 p-3">
                  <MapPin size={21} />
                </div>

                <div>
                  <p className="font-semibold">
                    Address
                  </p>

                  <p className="mt-1 text-slate-400">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-lg bg-green-600 p-3">
                  <Phone size={21} />
                </div>

                <div>
                  <p className="font-semibold">
                    Phone
                  </p>

                  <p className="mt-1 text-slate-400">
                    +977 9800000000
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-lg bg-green-600 p-3">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="font-semibold">
                    Email
                  </p>

                  <p className="mt-1 text-slate-400">
                    hello@ridenow.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-8 shadow-sm"
          >

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                disabled={loading}
                className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none focus:border-green-500 disabled:bg-slate-100"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block font-semibold text-slate-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                disabled={loading}
                className="w-full rounded-lg border border-slate-200 px-4 py-3.5 outline-none focus:border-green-500 disabled:bg-slate-100"
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block font-semibold text-slate-700">
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                disabled={loading}
                className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3.5 outline-none focus:border-green-500 disabled:bg-slate-100"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-4 font-bold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={18} />

              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>
      </div>
    </main>
  );
};

export default Contact;