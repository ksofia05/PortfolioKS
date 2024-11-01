import React from 'react';
import darkTheme from "../../public/videos/darkMode.mp4";
import '../App.css'; 


const Header = () => {
  return (
    <>
      <div id="home" className="relative h-screen w-screen">
        <div className="absolute inset-0 z-[-10]">
          <video 
            src={darkTheme}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="font-amatic font-bold text-center text-white flex flex-col items-center justify-center h-full">
          <h1 className="text-9xl md:text-7xl lg:text-8xl drop-shadow-lg">
            Karen Sofia^^
          </h1>
          <h2 className="text-6xl md:text-5xl lg:text-6xl font-normal mt-6 drop-shadow-lg">
            Desarrolladora Web y Diseñadora
          </h2>
        </div>
      </div>
    </>
  );
};

export default Header;
