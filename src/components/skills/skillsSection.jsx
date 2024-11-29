import React from 'react';
import { lenguages } from "../../lenguages/lenguages";

const SkillsSection = () => {
  const skills = lenguages.skills;
  const title = lenguages.title.habilities;

  return (
    <section id="skills" className="skills-section p-6 bg-black">
      <h2 className="text-5xl font-amatic font-bold mb-6 text-white flex justify-center">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="skill-card p-4 m-0 bg-white border border-gray-800 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1"
          >
            <h3 className="font-amatic text-3xl font-bold text-black">{skill.name}</h3>
            <p className=" font-amatic text-gray-700">{skill.level}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;