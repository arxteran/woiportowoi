import React, { useEffect } from "react";

const PortfolioSection: React.FC = () => {
  useEffect(() => {
    const portfolioSection = document.getElementById("portfolio");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            entry.target.classList.remove("fade-out-visible");
          } else {
            entry.target.classList.add("fade-out-visible");
            entry.target.classList.remove("fade-in-visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    portfolioSection?.querySelectorAll(".portfolio-item").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          /* Fade-in Animations */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Fade-out Animations */
          @keyframes fadeOut {
            from {
              opacity: 1;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              transform: translateY(20px);
            }
          }

          /* Apply the fade-in animation when visible */
          .fade-in-visible {
            opacity: 1;
            transform: translateY(0);
            animation: fadeIn 1s ease-out forwards;
          }

          /* Apply the fade-out animation when not visible */
          .fade-out-visible {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeOut 1s ease-out forwards;
          }

          /* Hover Effects for Portfolio Items */
          .portfolio-item {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s, transform 0.5s;
          }

          .portfolio-item:hover .project-image {
            transform: scale(1.1);
            filter: blur(4px);
          }

          .portfolio-item:hover .project-overlay {
            opacity: 1;
          }

          .project-image {
            transition: transform 0.5s, filter 0.5s;
          }

          .project-overlay {
            opacity: 0;
            background: rgba(0, 0, 0, 0.5);
            transition: opacity 0.3s;
            position: absolute;
            inset: 0;
            display: flex;
            align-items: flex-end;
            padding: 1rem;
            color: white;
          }
        `}
      </style>

      <section
        id="portfolio"
        className="animated-bg flex flex-col items-center justify-center p-16 pb-20 bg-gray-100"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Portfolio</h2>

        {/* Portfolio Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Project 1 */}
          <div className="portfolio-item relative group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/tefa.png"
              alt="tefa"
              className="project-image w-full h-48 object-cover"
            />
            <div className="project-overlay">
              <div>
                <h3 className="text-2xl font-semibold">Smart Attendance</h3>
                <p className="mt-1">
                  A system design for automatically monitoring and recording
                  employee attendance using smart technology.
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="portfolio-item relative group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/OS.png"
              alt="e-commerce"
              className="project-image w-full h-48 object-cover"
            />
            <div className="project-overlay">
              <div>
                <h3 className="text-2xl font-semibold">E-Commerce</h3>
                <p className="mt-1">
                  A design for an online store platform that facilitates buying
                  and selling products or services over the internet.
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="portfolio-item relative group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/hanazm.png"
              alt="tugas"
              className="project-image w-full h-48 object-cover"
            />
            <div className="project-overlay">
              <div>
                <h3 className="text-2xl font-semibold">Daftar Siswa</h3>
                <p className="mt-1">
                  An application design for managing student data, including
                  attendance and academic information.
                </p>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="portfolio-item relative group bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src="/images/faktur.png"
              alt="tugas"
              className="project-image w-full h-48 object-cover"
            />
            <div className="project-overlay">
              <div>
                <h3 className="text-2xl font-semibold">Faktur Belanja</h3>
                <p className="mt-1">
                  A system design for recording and managing purchase
                  transactions of goods or services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
