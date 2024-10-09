import React from 'react';
import './About.css';

const About = () => {
  const abouts = [
    {
      text: "Nato a Catania il 10 dicembre 2000, sono sempre stato incuriosito dal funzionamento delle cose. Smontavo tutto ciò che mi capitava per mano, e questa spinta mi ha portato a sviluppare una grande passione per la tecnologia .",
      links: [
        {word: "Catania", url: "#"},
        {word: "tecnologia", url: "#"}
      ]
    },
    {
      text: "Sono appassionato di sports ed e-sports , suono la chitarra, nel weekend mi piace praticare trekking , trascorrere del tempo nella natura o fare delle escursioni in moto.",
      links: [
        {word: "sports", url: "#"},
        {word: "e-sports", url: "#"},
        {word: "trekking", url: "#"},
      ] 
    },
    {
      text: "Dall'ottobre del 2023 ad oggi mi occupo di web-development . Sono un full-stack developer ma prediligo il frontend in quanto mi consente di dare libero sfogo alla mia creatività.",
      links: [
        { word: "web-development", url: "#" },
        { word: "full-stack", url: "#" },
        { word: "frontend", url: "#" }
      ]
    }
  ];

  const tecnologies = [
    'HTML', 'CSS', 'JavaScript', 'PHP', 'SQL', 'Vue.js', 'React.js', 'SASS', 'Laravel', 'MySQL', 'GIT', 'Tailwind', 'Bootstrap',
  ];

  return (
    <>
      <div className='mb-10'>
        {abouts.map((about, i) => (
          <p key={i}>
            {about.text.split(' ').map((word, j) => {
              const link = about.links.find(link => link.word === word);
              return link ? (
                <a key={j}> {word} </a>
              ) : (
                <span key={j}>{word} </span>
              );
            })}
          </p>
        ))}
      </div>

      <h2 className='text-white font-bold text-lg my-5'>Competenze e Strumenti</h2>
      <div className="flex flex-wrap text-center gap-3 max-md:justify-center">
        {tecnologies.map((category, i) => (
          <span className="badge whitespace-nowrap text-xs" key={i}>{category}</span>
        ))}
      </div>
    </>
  );
};

export default About;
