import { useEffect, useState } from "react";
import "./Navbar.css";
import "aos/dist/aos.css";

const sections = [
  { id: "about", name: "Chi sono" },
  { id: "studies", name: "Formazione" },
  { id: "experiences", name: "Esperienze" },
  { id: "projects", name: "Progetti" },
  { id: "contact", name: "Contattami" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        );

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    },
    {
      rootMargin: "-30% 0px -30% 0px",
      threshold: [0.1, 0.25, 0.5, 0.75],
    }
  );

  sections.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="routes-list max-lg:hidden">
      {sections.map((section) => (
        <a
          key={section.id}
          onClick={() => handleClick(section.id)}
          className={`route flex items-center ${
            activeSection === section.id ? "active" : ""
          }`}
          style={{ cursor: "pointer" }}
        >
          <div className="line" />
          <span>{section.name}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
