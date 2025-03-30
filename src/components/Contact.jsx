import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []); // Chiude correttamente useEffect

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_399qnfo", // Service ID
        "template_wfwt1dx", // Template ID
        {
          name: formData.fullName, // Usa "name" come placeholder per il nome
          email: formData.email, // Usa "email" come placeholder per l'email
          subject: formData.subject, // Oggetto del messaggio
          message: formData.message,
          company: formData.company,
          time: new Date().toLocaleString() // Usa un timestamp per "time"
        },
        "xh52W1hySwx3Nh-Mq" // Public Key
      )
      .then(
        () => {
          alert("Email inviata con successo!");
          setFormData({
            fullName: "",
            company: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          alert("Errore nell'invio: " + error.text);
        }
      );
  };

  return (
    <div data-aos="fade-left">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Nome Cognome"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <input
          type="text"
          name="company"
          placeholder="Nome Azienda (opzionale)"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <input
          type="text"
          name="subject"
          placeholder="Oggetto"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-700 border border-gray-600"
        />
        <textarea
          name="message"
          placeholder="Inserisci il tuo messaggio..."
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-700 border border-gray-600 h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded"
        >
          Invia Messaggio
        </button>
      </form>
    </div>
  );
};

export default Contact;
