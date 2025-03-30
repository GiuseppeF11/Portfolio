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
  }, []); 

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  const [notification, setNotification] = useState({
    message: "",
    type: "",
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
          name: formData.fullName, 
          email: formData.email, 
          subject: formData.subject,
          message: formData.message,
          company: formData.company,
          time: new Date().toLocaleString(),
        },
        "xh52W1hySwx3Nh-Mq" // Public Key
      )
      .then(
        () => {
          setNotification({
            message: "Email inviata con successo!",
            type: "success",
          });
          setFormData({
            fullName: "",
            company: "",
            email: "",
            subject: "",
            message: "",
          });

          // Nascondere la notifica dopo 3 secondi
          setTimeout(() => setNotification({ message: "", type: "" }), 3000);
        },
        (error) => {
          setNotification({
            message: `Errore nell'invio: ${error.text}`,
            type: "error",
          });

          setTimeout(() => setNotification({ message: "", type: "" }), 3000);
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

      {/* Notifica */}
      {notification.message && (
        <div
          className={`mt-4 p-3 rounded text-white ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          } transition-opacity duration-300`}
          style={{
            opacity: notification.message ? 1 : 0,
            maxWidth: "300px", 
            margin: "10px auto",
          }}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default Contact;
