import React, { useEffect, useState } from "react";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "about", name: "Chi sono" },
    { id: "studies", name: "Formazione" },
    { id: "experiences", name: "Esperienze" },
    { id: "projects", name: "Progetti" },
  ];

  // ATTIVAZIONE DEL LINK IN BASE ALLO SCROLL
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset per margini/padding
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  // SCROLL AL CLICK SUI LINK
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -80; // Compensa header fisso o padding
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      // Smooth scroll con intervallo
      const startPosition = window.scrollY;
      const distance = elementPosition + offset - startPosition;
      const duration = 500; // Durata in ms
      let startTime = null;

      const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      const scrollAnimation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
      };

      requestAnimationFrame(scrollAnimation);
    }
  };

  return (
    <nav className="routes-list max-lg:hidden">
      {sections.map((section) => (
        <a
          data-aos="fade-left"
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={`route flex items-center ${
            activeSection === section.id ? "active" : ""
          }`}
          style={{ cursor: "pointer" }}
        >
          <div className="line"></div>
          <span>{section.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
