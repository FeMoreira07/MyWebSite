import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";


function App() {
  return (
    <>
      <Header/>
      <AboutMe/>
      <Projects/>
      <WorkExperience/>
      <Skills/>
      <ContactMe/>
    </>
  );
}

export default App;
