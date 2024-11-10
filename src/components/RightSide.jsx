import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RightSide.css";
import About from "./About";
import Projects from "./Projects";
import Experiences from "./Experiences";
import { MdArrowForward } from "react-icons/md";

const RightSide = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="right-side lg:pt-20">
        {/* ABOUT */}
        <section className="about color-gray max-lg:mb-10 lg:mb-28" id="about">
          <div>
            <h1
              data-aos="fade-right"
              className="text-white text-4xl font-bold mb-4 lg:hidden"
            >
              ABOUT
            </h1>
          </div>
          <About></About>
        </section>

        {/* EXPERIENCES */}
        <section className="experiences" id="experiences">
          <div>
            <h1
              data-aos="fade-right"
              className="text-white text-4xl font-bold mb-4 lg:hidden"
            >
              EXPERIENCE
            </h1>
          </div>
          <Experiences></Experiences>
          <div className="h-60 flex items-center max-md:justify-center">
            <a
              data-aos="fade-right"
              target="blank"
              href="https://www.linkedin.com/in/giuseppe-failla-96a759194/"
              className="view-more title color-white text-lg font-bold flex items-center mb-1 gap-1"
            >
              <span className="text max-md:text-sm">Vedi altro</span>
              <MdArrowForward className="icon" />
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects" id="projects">
          <div>
            <h1
              data-aos="fade-right"
              className="text-white text-4xl font-bold mb-4 lg:hidden"
            >
              PROJECTS
            </h1>
          </div>
          <Projects></Projects>
          <div className=" my-28 flex items-center max-md:justify-center">
            <a
              data-aos="fade-right"
              target="blank"
              href="https://github.com/GiuseppeF11?tab=repositories"
              className="view-more title color-white text-lg font-bold flex items-center  gap-1"
            >
              <span className="text max-md:text-sm">
                Vedi l'archivio completo
              </span>
              <MdArrowForward className="icon" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default RightSide;
