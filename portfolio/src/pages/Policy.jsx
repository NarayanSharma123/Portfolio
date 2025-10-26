import React from "react";

const Policy = () => {
  return (
    <section
      className="min-h-screen bg-[#020617] text-white px-6 md:px-20 py-20 flex flex-col justify-center"
      id="policy"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Privacy <span className="text-teal-400">Policy</span>
        </h1>
        <p className="text-gray-400 mb-8">
          Last updated: <span className="text-teal-400">October 25, 2025</span>
        </p>
        <p className="text-gray-300 mb-6">
          This portfolio website does not collect or store any personal
          information from visitors.
        </p>
        <p className="text-gray-300 mb-8">
          External links are not under my control. Please review their policies
          if you visit them.
        </p>
      </div>
    </section>
  );
};

export default Policy;
