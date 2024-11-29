import React, { useState } from 'react';
import darkThemeProject from '../../../public/img/darkThemeProjects.jpg';
import { lenguages } from '../../lenguages/lenguages';
import { FaGithub, FaFigma } from 'react-icons/fa';

const Projects = () => {
  const projects = lenguages.projects || [];
  const title = lenguages.title.projects;
  const [activeSection, setActiveSection] = useState('design');

  const filteredProjects = projects.filter(project => {
    return activeSection === 'design' 
      ? project.title.includes("Diseño") 
      : project.title.includes("Desarrollo") || project.description.includes("Desarrollo");
  });

  const renderProjects = () => {
    return filteredProjects.map((project, index) => (
      <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex-1 min-w-[300px] md:min-w-[350px] lg:min-w-[400px] text-center mb-6">
        <div className="mb-4">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full object-contain rounded-md"  
          />
        </div>
        <h3 className="font-amatic font-bold text-4xl">{project.title}</h3> {/* Título más grande y en negrita */}
        <p className="font-amatic text-white mt-4 text-2xl">{project.description}</p> {/* Descripción más grande */}
        <a 
          href={project.link} 
          className="font-amatic text-2xl mt-4 inline-block bg-violet-500 hover:bg-violet-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out flex items-center justify-center space-x-2">
          {activeSection === 'design' ? <FaFigma /> : <FaGithub />}
          <span>{project.button}</span>
        </a>
      </div>
    ));
  };

  return (
    <div id="projects" className='relative h-screen w-screen'>
      <img 
        src={darkThemeProject}
        className='w-full h-full object-cover'
        alt="background" 
      />

      <div className="absolute top-10 left-0 right-0 flex justify-center">
        <h1 className="font-amatic font-bold text-5xl md:text-7xl text-center text-white">
          {title}
        </h1>
      </div>

      <div className="absolute top-32 left-0 right-0 flex justify-center space-x-10 z-10">
        <button 
          onClick={() => setActiveSection('design')}
          className={`font-amatic text-2xl px-4 py-2 rounded-lg transition duration-300 ${activeSection === 'design' ? 'bg-violet-600 text-white' : 'bg-white bg-opacity-10 text-white hover:bg-violet-600 hover:text-white'}`}>
          Diseños
        </button>
        <button 
          onClick={() => setActiveSection('development')}
          className={`font-amatic text-2xl px-4 py-2 rounded-lg transition duration-300 ${activeSection === 'development' ? 'bg-violet-600 text-white' : 'bg-white bg-opacity-10 text-white hover:bg-violet-600 hover:text-white'}`}>
          Desarrollo
        </button>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center pt-48 z-0">
        <div className="flex flex-wrap justify-center max-w-7xl w-full px-4 gap-6 overflow-auto">
          {renderProjects()}
        </div>
      </div>
    </div>
  );
}

export default Projects;
