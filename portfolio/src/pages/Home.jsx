import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import myImg from "/public/pics/myImg.png";
import MyResume from "../assets/my_Resume.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 bg-[#020617] text-white pt-24"
    >
      {/* Left Content */}
      <div className="flex flex-col gap-5 max-w-xl mt-10 md:mt-0">
        <p className="text-teal-400 font-medium text-lg tracking-wide">
          Hi, I’m
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Narayan <span className="text-teal-400">Bhojak</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-md">
          A passionate{" "}
          <span className="text-teal-400">Full Stack (MERN) Developer</span>{" "}
          dedicated to building modern, scalable, and user-focused web
          applications using cutting-edge technologies.
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href="#projects"
            className="px-5 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-teal-500/30"
          >
            View Projects
          </a>
          <a
            href={MyResume}
            download
            className="px-5 py-2 border-2 border-teal-500 text-teal-400 font-semibold rounded-lg flex items-center gap-2 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            Resume
          </a>
        </div>
      </div>

      {/* Right Content (Profile Image) */}
      <div className="flex justify-center items-center w-full md:w-[45%]">
        <div className="relative">
          <img
            src={myImg}
            alt="Profile"
            className="w-60 sm:w-72 md:w-80 rounded-full border-4 border-teal-500 shadow-lg shadow-teal-500/30 hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 rounded-full border-2 border-teal-400 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
