import React, { useEffect } from "react";

const AboutSection: React.FC = () => {
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            entry.target.classList.remove("fade-out");
          } else {
            entry.target.classList.remove("fade-in-visible");
            entry.target.classList.add("fade-out");
          }
        });
      },
      { threshold: 0.3 }
    );

    aboutSection
      ?.querySelectorAll(".fade-left, .fade-right, .fade-in")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
    /* Background Gradient Animation */
    .animated-bg {
      background: linear-gradient(270deg, #ffffff, #dcd6f7, #9b59b6, #3498db);
      background-size: 600% 600%;
      animation: gradientAnimation 15s ease infinite;
    }

    /* Keyframes untuk Animasi Gradien */
    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    /* Animasi Fade dari Kiri */
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    /* Animasi Fade dari Kanan */
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    /* Animasi Fade Biasa */
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

    /* Animasi Keluar Fade (Exit) */
    @keyframes fadeOutLeft {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(-20px);
      }
    }

    @keyframes fadeOutRight {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(20px);
      }
    }

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

    /* Kelas untuk Memicu Animasi */
    .fade-left {
      opacity: 0;
      transform: translateX(-20px);
      transition: opacity 0.5s, transform 0.5s;
    }

    .fade-right {
      opacity: 0;
      transform: translateX(20px);
      transition: opacity 0.5s, transform 0.5s;
    }

    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s, transform 0.5s;
    }

    /* Saat visible, jalankan animasi */
    .fade-in-visible.fade-left {
      opacity: 1;
      transform: translateX(0);
      animation: fadeInLeft 1s ease-out forwards;
    }

    .fade-in-visible.fade-right {
      opacity: 1;
      transform: translateX(0);
      animation: fadeInRight 1s ease-out forwards;
    }

    .fade-in-visible.fade-in {
      opacity: 1;
      transform: translateY(0);
      animation: fadeIn 1s ease-out forwards;
    }

    /* Animasi Keluar */
    .fade-out.fade-left {
      animation: fadeOutLeft 1s ease-out forwards;
    }

    .fade-out.fade-right {
      animation: fadeOutRight 1s ease-out forwards;
    }

    .fade-out.fade-in {
      animation: fadeOut 1s ease-out forwards;
    }
  `}
      </style>

      <section
        id="about"
        className="animated-bg flex flex-col md:flex-row items-center justify-center h-screen p-16 space-y-10 md:space-y-0 md:space-x-10 overflow-hidden"
      >
        {/* Kolom Kiri dengan Fade dari Kiri */}
        <div className="md:w-1/3 p-4 text-center md:text-left bg-gray-100 rounded-lg shadow-lg fade-left">
          <h2 className="text-2xl font-bold mb-4">Introducing</h2>
          <p className="text-gray-600">
            Hello! My name is Ardithya Teranova Hidayat, and I'm a passionate
            web designer and software developer. With a strong interest in
            information technology and a love for art, I strive to combine
            creativity with functionality in my projects.
          </p>
        </div>

        {/* Kolom Tengah dengan Fade Biasa */}
        <div className="md:w-1/3 p-4 flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg fade-in">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <div className="flex justify-center items-center w-40 h-40 rounded-full overflow-hidden mb-4">
            <img
              src="/images/aboutmeeee.jpeg"
              alt="Ardithya"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full flex justify-center space-x-6 mt-10">
            <img src="/images/vsc.png" alt="VSCode" className="w-10 h-10" />
            <img src="/images/figma.png" alt="Figma" className="w-10 h-10" />
            <img src="/images/mysql.png" alt="MySQL" className="w-10 h-10" />
            <img src="/images/nb.png" alt="NetBeans" className="w-10 h-10" />
            <img src="/images/rjs.png" alt="React" className="w-10 h-10" />
          </div>
        </div>

        {/* Kolom Kanan dengan Fade dari Kanan */}
        <div className="md:w-1/3 p-4 text-center md:text-left bg-gray-100 rounded-lg shadow-lg fade-right">
          <h2 className="text-2xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600">
            Proficient in creating visually appealing and user-friendly websites
            using tools like Adobe XD and Figma. I focus on UI/UX design
            principles to enhance user experience.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
