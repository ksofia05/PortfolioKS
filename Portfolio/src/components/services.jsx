import React from 'react';
import darkTheme from '../../public/img/darkThemebackground.jpg';
import { lenguages } from '../lenguages/lenguages';

const Services = () => {

  const title = lenguages.title.services;

  return (
    <div id="services" className="relative h-screen w-screen overflow-hidden">
      <img 
        src={darkTheme}
        className="w-full h-full object-cover"
        alt="background" 
      />

      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-6 md:p-10">
        <div className="w-full md:w-1/2 flex items-center justify-center mb-6">
          <h1 className="font-amatic font-bold text-4xl md:text-6xl lg:text-8xl text-center text-white">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-1/2 md:ml-[-20px]">
          {lenguages.services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-400 bg-opacity-20 backdrop-blur-lg p-4 rounded-lg shadow-2xl flex flex-col justify-center items-center transition-transform duration-300 transform hover:scale-105"
            >
              <h2 className="font-amatic font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl text-white text-center">{service.title}</h2>
              <p className="font-amatic text-white text-sm sm:text-base md:text-lg lg:text-xl text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
