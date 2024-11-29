import React from "react";
import Header from "../components/header";
import AboutMe from "../components/aboutMe";
import Services from "../components/services";
import '../App.css'; 
import ResponsiveAppBar from "../components/navbar";
import SkillsSection from "../components/skills/skillsSection";
import Projects from "../components/projects/projects";
import SocialMedia from "../components/socialMedia";

const Home = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Header id="home" />
            <AboutMe id="about" /> 
            <Services id="services" />
            <SkillsSection id="skills" />
            <Projects id="projects" />
            <SocialMedia id="socialmedia" />
        </>
    );
};

export default Home;
