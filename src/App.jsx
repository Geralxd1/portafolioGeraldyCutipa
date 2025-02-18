import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ExperienceTimeline from "./components/ExperienceTimeLine";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-[#0a192f] text-white min-h-screen">
      <Navbar />
      <main className="px-6">
        <section id="Inicio" className="h-screen flex items-center justify-center">
          <HeroSection />
        </section>

        <section id="Sobre mí" className="h-screen flex items-center justify-center">
          <AboutMe />
        </section>

        <section id="Habilidades" className="h-screen flex items-center justify-center">
          <Skills />
        </section>

        <section id="Experiencia" className="h-screen flex items-center justify-center">
          <Experience />
        </section>

        <section id="Contacto" className="h-screen flex items-center justify-center">
          <h2 className="text-3xl">Contacto</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
