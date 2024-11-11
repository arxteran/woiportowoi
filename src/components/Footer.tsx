import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Logo or Title */}
        <h2 className="text-2xl font-semibold mb-4">ArrTeran</h2>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.instagram.com/arr.teran_/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-white hover:text-gray-400"></i>
          </a>
          <a
            href="https://youtube.com/@arrteran"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube text-white hover:text-gray-400"></i>
          </a>
          <a
            href="https://github.com/arxteran"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-white hover:text-gray-400"></i>
          </a>
          <a
            href="https://facebook.com/ardithya.t.hidayat"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook text-white hover:text-gray-400"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Ardithya Teranova Hidayat. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
