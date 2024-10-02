import React, { useState } from "react";
import './RightSide.css';
import About from './About'
import Projects from "./Projects";
import Experiences from "./Experiences";
import { MdArrowForward } from "react-icons/md";


function RightSide() {

  return (
    <>
      <div className="right-side pt-20">
        {/* ABOUT */}
        <section  className="about color-gray " id="about">
          <h1 className="text-white font-bold mb-4 lg:hidden  sticky">ABOUT</h1>
            <About></About>    
        </section>
        {/* EXPERIENCES */}
        <section className="experiences" id="experiences">
          <h1 className="text-white font-bold mb-4 lg:hidden  sticky">EXPERIENCE</h1>
          <Experiences></Experiences>
          <div className="h-60 flex items-center">
            <a target="blank" href="https://www.linkedin.com/in/giuseppe-failla-96a759194/" className="view-more title color-white text-lg font-bold flex items-center mb-1 gap-1"> <span className="text">Vedi altro</span> <MdArrowForward className="icon"/></a>
          </div>
        </section>
        {/* PROJECTS */}
        <section className="projects" id="projects">
          <h1 className="text-white font-bold mb-4 lg:hidden  sticky">PROJECTS</h1>
          <Projects></Projects>
          <div className="h-40 flex items-center">
            <a target="blank" href="https://github.com/GiuseppeF11?tab=repositories" className="view-more title color-white text-lg font-bold flex items-center mb-1 gap-1"> <span className="text">Vedi l'archivio completo</span> <MdArrowForward className="icon"/></a>
          </div>
        </section>
      </div>
    </>
  );
}

export default RightSide;




         
