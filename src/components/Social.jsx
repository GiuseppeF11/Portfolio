import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

function Social() {
    const socials = [
        {
            name: 'Github',
            icon: <FaGithub />,
            url: 'https://github.com/GiuseppeF11'
        },
        {
            name: 'Linkedin',
            icon: <FaLinkedin />,
            url: 'https://www.linkedin.com/in/giuseppe-failla-96a759194/'
        },
        {
            name: 'Codewars',
            icon: <SiCodewars />,
            url: 'https://www.codewars.com/users/GiuseppeF11'
        },
        {
            name: 'Instagram',
            icon: <FaInstagram />,
            url: 'https://www.instagram.com/giuseppefailla00/'
        },
    ]
  return (

    <>
        {socials.map((app) => (
            <a target="blank" href={app.url}> {app.icon}</a>
        ) )}
    </>
  )
}
export default Social
