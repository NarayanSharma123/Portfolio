import React from "react";

const Services = () => {
  const services = [
    {
      title: "Full Stack Web Development",
      description:
        "Building complete MERN stack applications with fast performance, modern UI, and robust backend APIs.",
    },
    {
      title: "Frontend Engineering",
      description:
        "Crafting responsive, elegant, and user-friendly interfaces using React and Tailwind CSS.",
    },
    {
      title: "Backend API Development",
      description:
        "Developing secure, scalable REST APIs with Node.js, Express, and MongoDB for seamless data flow.",
    },
    {
      title: "Cloud & Deployment",
      description:
        "Deploying production-ready apps on Vercel, Render, or Railway with optimized performance and cloud storage integration.",
    },
    {
      title: "Authentication & Security Systems",
      description:
        "Implementing secure logins with JWT, bcrypt, and OAuth to ensure safe and reliable user experiences.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-[#020617] text-white px-6 md:px-20 py-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          My <span className="text-teal-400">Services</span>
        </h1>
        <p className="text-gray-400 mb-12">
          Here are some of the services I offer as a web developer and designer.
        </p>

        <div className="w-full grid gap-8 md:grid-cols-2">
          {/* services */}
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111827] p-6 rounded-lg shadow-lg hover:shadow-teal-400 transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-3 text-teal-400">
                {service.title}
              </h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
