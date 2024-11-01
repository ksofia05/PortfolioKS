import React from "react";
import "../App.css";
import { lenguages } from "../lenguages/lenguages";
import photoPresentation from "../../public/img/photoPresentation.jpeg";

const AboutMe = () => {
  return (
    <>
      <div id="about" className="flex flex-col md:flex-row w-full h-screen bg-black">
        <div className="w-full md:w-1/2 h-full backdrop-blur-lg bg-white bg-opacity-10 shadow-lg rounded-lg flex flex-col items-center justify-center p-6 md:p-10">
          <h1 className="font-amatic text-5xl md:text-7xl text-white text-center">
            {lenguages.aboutMe[0].title}
          </h1>

          <div className="mt-4 w-full max-w-md p-4 bg-transparent backdrop-blur-sm text-shadow rounded-lg">
            <p className="text-white text-lg md:text-3xl font-amatic text-center">
              {lenguages.aboutMe[0].description}
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center w-full md:w-1/2 h-full">
          <img 
            src={photoPresentation} 
            alt="Descripción de la imagen" 
            className="w-32 md:w-64 lg:w-96 h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
