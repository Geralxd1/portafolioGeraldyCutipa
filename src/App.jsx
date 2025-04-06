import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ExperienceTimeline from "./components/ExperienceTimeLine";
import Experience from "./components/Experience";
import { motion } from "framer-motion";
import Background from "./components/Background";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Trail } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// 🌠 Estrella fugaz animada con estela
function ShootingStar() {
  const ref = useRef(null);

  // Ajustar posición inicial para cubrir mejor la pantalla
  const [position, setPosition] = useState([
    (Math.random() - 0.5) * 40, // Aumentamos el rango en X
    Math.random() * 15 + 10, // Y alto para que caiga desde más arriba
    (Math.random() - 0.5) * 40 // Aumentamos el rango en Z
  ]);

  useFrame(() => {
    if (!ref.current) return;

    // Movimiento en diagonal
    ref.current.position.x -= 0.15; // Velocidad mayor para mejor efecto
    ref.current.position.y -= 0.1;

    // Si sale de la pantalla, reiniciar posición
    if (ref.current.position.y < -15 || ref.current.position.x < -25) {
      const newPosition = [
        (Math.random() - 0.5) * 30, // Más distribución en X
        Math.random() * 15 + 5, // Más arriba
        (Math.random() - 0.5) * 25 // Más profundidad
      ];
      setPosition(newPosition);
      ref.current.position.set(...newPosition);
    }
  });

  return (
    <>
      {/* 🌠 Estela */}
      <Trail
        local
        width={2} // Reduce el grosor para más realismo
        length={7} // Aumenta el largo de la estela
        color={"#ffffff"} // Color blanco puro
        attenuation={(t) => t * t * t} // Desvanecimiento más suave
      >
        {/* 🌟 Estrella fugaz */}
        <mesh ref={ref} position={position}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color="white" />
        </mesh>
      </Trail>
    </>
  );
}

function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh", // Asegura que el fondo siempre cubra toda la pantalla
        overflow: "hidden", // Evita que el fondo se mueva cuando scroll
        backgroundColor: "#0a192f", // Fondo de color oscuro para todo el contenedor
      }}
      className="text-white"
    >
      {/* Canvas con fondo 3D */}
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{
          position: "fixed", // Lo hace fijo al fondo
          top: 0,
          left: 0,
          zIndex: 0, // Asegura que el canvas esté al fondo
          width: "100%",
          height: "100%",
        }}
      >
        <Stars radius={80} depth={80} count={7000} factor={5} fade />
        {Array.from({ length: 5 }).map((_, i) => (
          <ShootingStar key={i} />
        ))}
      </Canvas>

      {/* Otros elementos de tu página, como el contenido */}
      <div
        style={{
          position: "relative",
          zIndex: 1, // Asegúrate de que el contenido esté sobre el fondo
          textAlign: "center",
        }}
      >
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
    </div>
  );
}


export default App;
