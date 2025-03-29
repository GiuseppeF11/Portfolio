import React, { useEffect } from "react";
import "./LeftSide.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RightSide.css";
import Navbar from "./Navbar";
import Social from "./Social";

const LeftSide = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <section className="container pt-20">
        <div className="tracking-wider">
          <h1
            data-aos="fade-right"
            className="max-lg:text-4xl lg:text-5xl font-bold mb-3"
          >
            Giuseppe Failla
          </h1>
          <p data-aos="fade-left" className="role color-water">
            Full-Stack Developer
          </p>
          <p data-aos="fade-right" className=" md:w-3/4 color-gray mb-5">
            Creo soluzioni digitali, trasformando problemi complessi in codice
            chiaro e funzionale.
          </p>
        </div>

        <Navbar></Navbar>

        <div className="flex sites my-5 gap-10 max-lg:hidden">
          <Social></Social>
        </div>
      </section>
    </>
  );
};

export default LeftSide;
