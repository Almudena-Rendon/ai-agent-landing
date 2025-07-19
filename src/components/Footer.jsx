import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/almudena-rendon-fernandez/',
    icon: <FaLinkedin />,
  },
  { href: 'https://github.com/Almudena-Rendon', icon: <FaGithub /> },
]

const Footer = () => {
  return (
    <footer className="w-screen p-4 px-10 text-gray-200 bg-black border-t border-t-gray-500 md:py-4">
        <div className="flex flex-col items-center justify-between gap-4 p-4 md:flex-row">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/logo-almu-codes.svg"
              alt="almu-codes"
              className="h-[35px] w-full"
            />
            <p className="pt-2 text-sm">© Almudena Rendón Fernández 2025</p>
          </div>
          <div className="flex justify-center gap-4 md:justify-start">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 ease-in-out hover:text-[#FA5729] text-[22px]"
              >
                {link?.icon}
              </a>
            ))}
          </div>
          <div className="text-center">
            <h3 className="font-bold uppercase text-md">NeuralForge - AI Agent</h3>
            <p className="text-sm max-w-[450px] pt-1">
             Images sourced from Freepik.
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer
