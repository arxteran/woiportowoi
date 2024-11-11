import React, { useEffect, useRef, useState } from "react";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-gray-100"
    >
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
          @keyframes pulseGlow {
            0% {
              box-shadow: 0 0 10px rgba(128, 0, 128, 0.4);
            }
            50% {
              box-shadow: 0 0 20px rgba(128, 0, 128, 0.7);
            }
            100% {
              box-shadow: 0 0 10px rgba(128, 0, 128, 0.4);
            }
          }
          .fade-in {
            animation: fadeIn 1s ease forwards;
          }
          .fade-out {
            animation: fadeOut 1s ease forwards;
          }
          .pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite;
          }
        `}
      </style>

      {/* Left side - Text Content */}
      <div
        className={`md:w-1/2 text-center md:text-left md:pr-8 ${
          isVisible ? "fade-in" : "fade-out"
        }`}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <h1 className="text-5xl font-bold">Hello, I'm Ardithya</h1>
        <p className="text-lg mt-2 font-semibold">UI/UX Designer & Developer</p>
        <p className="mt-3 text-gray-600 max-w-md text-base">
          Blending art and technology to create captivating digital experiences.
          Take a closer look at my work!
        </p>
      </div>

      {/* Right side - Image */}
      <div
        className={`md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end ${
          isVisible ? "fade-in" : "fade-out"
        }`}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <div
          className="w-80 h-80 justify-end items-end rounded-full overflow-hidden shadow-lg"
          style={{
            animation: isVisible ? "pulseGlow 2s ease-in-out infinite" : "none",
            animationDelay: "0.8s",
          }}
        >
          <img
            src="/images/aing.jpeg"
            alt="Ardithya"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
