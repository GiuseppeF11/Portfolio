import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const abouts = [
    {
      text: "Nato a Catania il 10 dicembre 2000, sono sempre stato estremamente curioso. La mia curiosità ha trovato libero sfogo nella tecnologia e nelle sue mille sfaccettature",
      links: [
        { word: "Catania", url: "#" },
        { word: "tecnologia", url: "#" },
      ],
    },
    {
      text: "Sono appassionato di sports ed e-sports , suono la chitarra, ma soprattutto mi piace fare tante escursioni a piedi, in bici o in moto va bene lo stesso! Vivendo in Sicilia tra mare e montagna le strade da percorrere non mancano!",
      links: [
        { word: "sports", url: "#" },
        { word: "e-sports", url: "#" },
        { word: "escursioni", url: "#" },
        { word: "mare", url: "#" },
        { word: "montagna", url: "#" },
      ],
    },
    {
      text: "Dal 2023 mi occupo di web-development come full-stack developer.",
      links: [
        { word: "web-development", url: "#" },
        { word: "full-stack", url: "#" },
        { word: "developer", url: "#" }
      ],
    },
  ];

  const tecnologies = [
    "React.js",
    "Vue.js",
    "PHP",
    "AWS",
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "SQL",
    "SASS",
    "Laravel",
    "MySQL",
    "GIT",
    "Tailwind",
    "Bootstrap"
  ];

  return (
    <>
      <div className="mb-10">
        {abouts.map((about, i) => (
          <p key={i} data-aos="fade-up">
            {about.text.split(" ").map((word, j) => {
              const link = about.links.find((link) => link.word === word);
              return link ? (
                <a key={j}> {word} </a>
              ) : (
                <span key={j}>{word} </span>
              );
            })}
          </p>
        ))}
      </div>

      <div data-aos="fade-up">
        <h2 className="text-white font-bold text-lg my-5">
          Competenze e Strumenti
        </h2>
        <div className="flex flex-wrap text-center gap-3 max-md:justify-center">
          {tecnologies.map((category, i) => (
            <span className="badge whitespace-nowrap text-xs" key={i}>
              {category}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
