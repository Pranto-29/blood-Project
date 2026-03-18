import React from 'react';


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // future: backend / email service
    alert("Message sent successfully!");
  };

  return (
    <div className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Contact Us
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow"
        >
          <h3 className="text-xl font-semibold mb-4">
            Send us a message
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 border rounded"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 border rounded"
            required
          />

          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-3 border rounded"
            rows="5"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">
            Get in Touch
          </h3>

          <p className="mb-3">
            📞 <span className="font-medium">Phone:</span> +880 17XXXXXXX
          </p>

          <p className="mb-3">
            ✉️ <span className="font-medium">Email:</span> support@blooddonation.com
          </p>

          <p>
            📍 <span className="font-medium">Address:</span> Dhaka, Bangladesh
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;

  