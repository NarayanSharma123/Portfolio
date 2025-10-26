import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Twiller - Twitter Clone",
    description:
      "A real-time Twitter clone with Firebase Auth, MongoDB backend, and live notifications via Socket.IO. Fully responsive and modern design.",
    tech: ["React", "Firebase", "Node.js", "MongoDB", "Socket.IO"],
    live: "https://github.com/NarayanSharma123/twiller-twitterclone.git",
    code: "https://github.com/NarayanSharma123/twiller-twitterclone.git",
  },
  {
    title: "ZyngoChat - Real-time Chat App",
    description:
      "A secure MERN-based chat app with authentication, image sharing, emojis, and live chat using Socket.IO and JWT.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    live: "https://github.com/NarayanSharma123/Alfa-zyngoChat-II.git",
    code: "https://github.com/NarayanSharma123/Alfa-zyngoChat-II.git",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my full-stack projects and skills. Designed with React, Tailwind CSS, and smooth scroll animations.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://narayan-portfolio-ten.vercel.app/",
    code: "https://github.com/NarayanSharma123/narayan-portfolio.git",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-[#020617] text-white flex flex-col items-center px-6 md:px-16 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My <span className="text-teal-500">Projects</span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-[#0f172a] border border-teal-800 rounded-2xl p-6 shadow-lg hover:shadow-teal-800/40 transition duration-500 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-semibold text-teal-400 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="bg-teal-900/30 text-teal-300 px-3 py-1 rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-teal-500 hover:bg-teal-700 px-4 py-2 rounded-lg transition"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
