import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Projects.css";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import CurrencyConverter from "../assets/projects/Currency Converter.png";
import Fastbites from "../assets/projects/Fastbites.png";
import Meridiano from "../assets/projects/Meridiano.png";
import Portfolio from "../assets/projects/Portfolio.png";
import Spotify from "../assets/projects/Spotify.png";
import Myflix from "../assets/projects/Myflix.png";

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [aosDisabled, setAosDisabled] = useState(false); // Stato per disattivare AOS

  useEffect(() => {
    if (!aosDisabled) {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
      });
    }

    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [aosDisabled]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setAosDisabled(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setAosDisabled(false);
  };

  const projects = [
    {
      date: "2024",
      name: "Portfolio",
      description:
        "Un sito portfolio per presentarmi con le mie esperienze ed alcuni dei miei progetti.",
      link: "https://github.com/GiuseppeF11/Portfolio",
      image: Portfolio,
      documentations: [
        {
          name: "React Icons",
          url: "https://react-icons.github.io/react-icons/",
        },
        { name: "Tailwind", url: "https://tailwindcss.com/" },
      ],
      aos: "fade-up",
      categories: ["React.js"],
    },
    {
      date: "2024",
      name: "Meridiano",
      description:
        "App per pianificare ed organizzare viaggi, rivivere avventure passate a sfogliare gli album dei ricordi.",
      link: "https://github.com/GiuseppeF11/travel-app",
      image: Meridiano,
      documentations: [
        { name: "Swiper", url: "https://swiperjs.com/" },
        { name: "AOS.js", url: "https://michalsnik.github.io/aos/" },
        { name: "Bootstrap", url: "https://getbootstrap.com/" },
        { name: "FontAwesome", url: "https://fontawesome.com/" },
      ],
      aos: "fade-up",
      categories: ["Laravel", "Blade"],
    },
    {
      date: "2024",
      name: "Myflix",
      description:
        "Sito per consultare la più vasta libreria cinematografica, visualizzare i rispettivi trailer e creare una lista preferiti.",
      link: "https://myflix-livid-theta.vercel.app/",
      image: Myflix,
      documentations: [
        { name: "The Movie DB", url: "https://www.themoviedb.org/" },
        { name: "Swiper", url: "https://swiperjs.com/" },
        { name: "Bootstrap", url: "https://getbootstrap.com/" },
        { name: "FontAwesome", url: "https://fontawesome.com/" },
      ],
      aos: "fade-up",
      categories: ["Vue.js", "HTML", "CSS", "JavaScript"],
    },
    {
      date: "2024",
      name: "Currency Converter",
      description:
        "Web-App per eseguire la conversione delle valute sfruttando i dati forniti dalla Banca Centrale Europea.",
      link: "https://github.com/GiuseppeF11/currency-converter",
      image: CurrencyConverter,
      documentations: [
        { name: "Frankfurter", url: "https://frankfurter.dev/" },
        { name: "Bootstrap", url: "https://getbootstrap.com/" },
        { name: "FontAwesome", url: "https://fontawesome.com/" },
      ],
      aos: "fade-up",
      categories: ["Vue.js", "HTML", "CSS", "JavaScript"],
    },
    {
      date: "2024",
      name: "Fastbites",
      description: "App di food-delivery ideata per consumatori e ristoratori.",
      link: "https://github.com/alessiopalmieri001/Fast-Bites-Backend-Bf",
      image: Fastbites,
      documentations: [
        { name: "Braintree", url: "https://www.braintreepayments.com/fr" },
        { name: "Bootstrap", url: "https://getbootstrap.com/" },
        { name: "FontAwesome", url: "https://fontawesome.com/" },
      ],
      aos: "fade-up",
      categories: ["Vue.js", "Laravel"],
    },
    {
      date: "2024",
      name: "Spotify",
      description: "Emulazione della celebre app per la riproduzione musicale.",
      link: "https://github.com/GiuseppeF11/html-css-spotifyweb",
      image: Spotify,
      documentations: [],
      aos: "fade-up",
      categories: ["HTML", "CSS"],
    },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <a
          data-aos={!aosDisabled ? project.aos : ""}
          target="blank"
          href={project.link}
          key={index}
          className={`project card grid grid-flow-col gap-5 my-5 p-8 transition-all duration-300 ${
            isDesktop && hoveredIndex !== null && hoveredIndex !== index
              ? "brightness-50"
              : ""
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="col-span-3 pt-2 max-xl:hidden h-28">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="col-span-4">
            <h3 className="title color-white text-lg font-bold h-10 flex items-center mb-1 gap-1 max-md:justify-center lg:justify-start">
              {project.name.length > 30
                ? `${project.name.slice(0, 30)}...`
                : project.name}{" "}
              <span className="text-sm icon">
                <MdOutlineArrowOutward />
              </span>
            </h3>
            <p className="text-sm mb-3">{project.description}</p>
            <div className="documentations flex flex-wrap text-center gap-3 mb-3 max-md:justify-center lg:justify-start">
              {project.documentations.map((doc, i) => (
                <a
                  target="blank"
                  href={doc.url}
                  className="link whitespace-nowrap text-sm flex items-center gap-2"
                  key={i}
                >
                  <FaLink /> {doc.name}
                </a>
              ))}
            </div>
            <div className="categories flex flex-wrap text-center gap-3 my-5 max-md:justify-center lg:justify-start">
              {project.categories.map((category, i) => (
                <span className="badge whitespace-nowrap text-xs" key={i}>
                  {category}
                </span>
              ))}
            </div>

            <div className="col-span-2 pt-2 h-40 xl:hidden flex max-md:justify-center lg:justify-start">
              <img src={project.image} alt={project.name} />
            </div>
          </div>
        </a>
      ))}
    </>
  );
}

export default Projects;
