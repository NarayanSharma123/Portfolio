import React from "react";

const categories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "Socket.IO",
      "JWT Auth",
      "Firebase",
      "Cloudinary",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose", "Firebase Firestore", "MySQL (Basic)"],
  },
  {
    title: "Dev Tools & Deployment",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "Thunder Client",
      "Vercel",
      "Render",
      "Railway",
      "Netlify",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#020617] text-white flex flex-col justify-center items-center px-6 md:px-16 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        My <span className="text-teal-500">Skills</span>
      </h2>

      <div className="w-full max-w-6xl space-y-10">
        {categories.map((category, i) => (
          <div key={i}>
            <h3 className="text-2xl font-semibold mb-4 text-teal-400">
              {category.title}
            </h3>

            <div className="overflow-hidden relative group">
              <div className="flex animate-scroll whitespace-nowrap">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#0f172a] text-white border-2 border-teal-700 rounded-xl px-6 py-3 mx-2 text-lg font-medium hover:bg-teal-600 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
