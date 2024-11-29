import React, { useEffect } from 'react';
import { FaInstagram, FaGithub, FaFigma } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md'; // Importa el icono de correo electrónico

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);
    
    // Cleanup function to remove the script if needed
    return () => {
      document.getElementsByTagName('head')[0].removeChild(script);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex justify-center space-x-6">
        <a 
          href="https://github.com/ksofia05"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-500 transition duration-300"
        >
          <FaGithub size={30} />
        </a>
        <a 
          href="https://www.figma.com/files/team/1386720496384360708/recents-and-sharing/recently-viewed?fuid=1386720494568039020"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-500 transition duration-300"
        >
          <FaFigma size={30} />
        </a>
        <a 
          href="https://wa.me/+573174666361" // Use your WhatsApp number here
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-500 transition duration-300"
        >
          <IoLogoWhatsapp size={30} />
        </a>
        <a 
          href="mailto:karen_slizcano@soy.sena.edu.co" // Usa tu correo aquí
          className="hover:text-violet-500 transition duration-300"
        >
          <MdEmail size={30} />
        </a>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">© {new Date().getFullYear()} Karen Lizcano. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
