import { FaLinkedin, FaGithub } from 'react-icons/fa'

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/almudena-rendon-fernandez/',
    label: 'LinkedIn de Almudena Rendón',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://github.com/Almudena-Rendon',
    label: 'GitHub de Almudena Rendón',
    icon: <FaGithub />,
  },
]

const Footer = () => {
  return (
    <footer
      className="w-screen p-4 px-10 text-gray-100 bg-black border-t font-inter border-t-gray-500 md:py-4"
      id="contact"
      role="contentinfo"
    >
      <div className="flex flex-col items-center justify-between gap-4 p-4 md:flex-row">

        <div className="flex flex-col items-center justify-center">
          <img
            src="/logo-almu-codes.svg"
            alt="Logo de Almu Codes"
            className="h-[35px] w-full"
          />
          <p className="pt-2 text-[11px] text-gray-300">
            © Almudena Rendón Fernández 2025
          </p>
        </div>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="transition-colors duration-200 ease-in-out hover:text-gray-400 text-[22px]"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="font-bold uppercase text-md">NeuralForge - AI Agent</p>
          <p className="text-[11px] max-w-[450px] pt-1 text-gray-300">
            Imágenes obtenidas de Freepik.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

