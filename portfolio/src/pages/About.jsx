import React from "react";
import myImg from "/public/pics/myImg.png";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#020617] text-white flex items-center justify-center px-6 md:px-16 lg:px-24 py-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={myImg}
            alt="About Me"
            className="w-64 sm:w-72 md:w-80 rounded-2xl border-4 border-teal-500 shadow-lg shadow-teal-500/30 hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-white">
            About <span className="text-teal-400">Me</span>
          </h2>
          <p className="text-teal-400 text-lg font-semibold mb-2">
            Full Stack (MERN) Developer | Tech Enthusiast
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I'm a passionate{" "}
            <span className="text-teal-400 font-medium">
              Full Stack (MERN) Developer
            </span>{" "}
            who loves building powerful, efficient, and user-focused web
            applications. My goal is to create seamless digital experiences by
            combining beautiful frontend design with robust backend
            architecture.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            I specialize in developing{" "}
            <span className="text-teal-400 font-medium">
              end-to-end web solutions
            </span>{" "}
            using modern technologies that ensure performance, scalability, and
            clean code practices.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I work primarily with{" "}
            <span className="text-teal-400 font-medium">React.js</span> for
            frontend and{" "}
            <span className="text-teal-400 font-medium">
              Node.js, Express.js
            </span>
            , and <span className="text-teal-400 font-medium">MongoDB</span> for
            backend development. I’m always eager to learn new technologies and
            improve my problem-solving skills to stay ahead in the ever-evolving
            web ecosystem.
          </p>

          <div className="mt-6">
            <a
              href="#skills"
              className="inline-block px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 hover:shadow-teal-500/30 transition-all duration-300"
            >
              View My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
