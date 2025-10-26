import React from "react";
import myImg from "/public/pics/myImg.png";

const Contacts = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#020617] text-white flex items-center justify-center px-6 md:px-16 lg:px-24 py-20"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-teal-400">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Have questions, ideas, or collaboration opportunities? We’d love to
            hear from you. Fill out the form and we’ll respond as soon as
            possible.
          </p>

          <img
            src={myImg}
            alt="Contact illustration"
            className="w-64 h-64 object-cover rounded-full border-4 border-teal-500 shadow-lg hover:scale-105 transition-transform duration-300 mx-auto md:mx-0"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 bg-[#0f172a] p-8 rounded-2xl shadow-lg border border-teal-500/30 hover:border-teal-400 transition-all duration-300">
          <form className="flex flex-col gap-5">
            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full sm:w-1/2 px-4 py-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full sm:w-1/2 px-4 py-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
            />

            {/* Message */}
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all resize-none"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="mt-3 w-full sm:w-auto px-8 py-3 rounded-lg bg-teal-500 font-semibold text-white shadow-md hover:bg-teal-600 hover:shadow-teal-500/30 active:scale-95 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
