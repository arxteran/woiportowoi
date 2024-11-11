import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Pastikan animasi smooth diaktifkan
        block: "start", // Menyelaraskan elemen di bagian atas
      });
      setIsMenuOpen(false); // Menutup menu setelah klik pada mobile view
    }
  };

  return (
    <div className="fixed top-0 w-full z-10 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-screen-lg">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="ArrTeran Logo" className="h-5" />
          <span className="text-lg font-semibold text-black">ArrTeran</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-5 text-sm font-semibold text-gray-800">
          <a
            onClick={() => handleScroll("#home")}
            className="hover:text-gray-500 transition duration-300 cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => handleScroll("#about")}
            className="hover:text-gray-500 transition duration-300 cursor-pointer"
          >
            About
          </a>
          <a
            onClick={() => handleScroll("#portfolio")}
            className="hover:text-gray-500 transition duration-300 cursor-pointer"
          >
            Portfolio
          </a>
          <a
            onClick={() => handleScroll("#contact")}
            className="hover:text-gray-500 transition duration-300 cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-4 h-0.5 bg-black transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-4 h-0.5 bg-black transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-4 h-0.5 bg-black transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-white shadow-md ${
          isMenuOpen
            ? "max-h-screen opacity-100 py-2"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-2 text-sm font-semibold text-center text-gray-800">
          <a
            onClick={() => handleScroll("#home")}
            className="hover:text-gray-500 transition duration-300 cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => handleScroll("#about")}
            className="hover:text-gray-500 transition duration-300 cursor-pointer"
          >
            About
          </a>
          <a
            onClick={() => handleScroll("#portfolio")}
            className="hover:text-gray-500 transition duration-300 cursor-pointer"
          >
            Portfolio
          </a>
          <a
            onClick={() => handleScroll("#contact")}
            className="hover:text-gray-500 transition duration-300 cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
