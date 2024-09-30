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
        <section  className="about color-gray px-8" id="about">
            <About></About>    
        </section>
        {/* EXPERIENCES */}
        <section className="experiences" id="experiences">
          <Experiences></Experiences>
          <div className="h-40 flex items-center">
            <a href="https://www.linkedin.com/in/giuseppe-failla-96a759194/" className="view-more title color-white text-lg font-bold flex items-center mb-1 gap-1"> <span className="text">View More</span> <MdArrowForward className="icon"/></a>
          </div>
        </section>
        {/* PROJECTS */}
        <section className="projects" id="projects">
          <Projects></Projects>
          <div className="h-40 flex items-center">
            <a href="https://github.com/GiuseppeF11?tab=repositories" className="view-more title color-white text-lg font-bold flex items-center mb-1 gap-1"> <span className="text">View Full Project Archive</span> <MdArrowForward className="icon"/></a>
          </div>
        </section>
      </div>
    </>
  );
}

export default RightSide;




         
