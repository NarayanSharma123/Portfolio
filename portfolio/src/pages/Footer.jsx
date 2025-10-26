import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-400 py-6 px-6 md:px-20 border-t border-gray-700">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        {/* Right - social links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/NarayanSharma123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/narayan-bhojak-02573a369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            LinkedIn
          </a>
          <a
            href="https://www.youtube.com/@AIKARYAStudios"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
