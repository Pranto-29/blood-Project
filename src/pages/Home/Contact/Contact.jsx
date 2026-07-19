import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold">
            Contact Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900">
            Get In <span className="text-red-600">Touch</span>
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            Have any questions or need help? We'd love to hear from you. Send us
            a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                required
                className="w-full px-5 py-4 rounded-xl border border-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none resize-none transition"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-300"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-400 rounded-3xl shadow-xl p-6 flex items-center gap-5 hover:-translate-y-1 transition">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                <FaPhoneAlt className="text-red-600 text-2xl" />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+880 1320932903</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center gap-5 hover:-translate-y-1 transition">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                <FaEnvelope className="text-red-600 text-2xl" />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">23pranto729@gmail.com</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 flex items-center gap-5 hover:-translate-y-1 transition">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                <FaMapMarkerAlt className="text-red-600 text-2xl" />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-300 to-pink-300 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">❤️ Every Drop Counts</h3>

              <p className="leading-7 text-red-100">
                Your blood donation can save up to three lives. Join our
                community today and become a hero for someone in need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
