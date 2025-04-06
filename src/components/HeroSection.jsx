import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import { Suspense } from "react";
import * as THREE from "three";
import WavyText from "./WavyText";

const HeroSection = () => {
    return (
        <div className="h-screen flex items-center justify-center text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-8">
                {/* Texto */}
                <div className="md:w-1/2 text-center md:text-left">
                    <WavyText text="¡Hola! soy Geral" ></WavyText>
                    <h2 className="text-3xl mt-4 font-semibold">Desarrolladora de sistemas web y de escritorio</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Soy desarrolladora móvil y web junior con formación en Ingeniería de Sistemas.
                        Me apasiona la tecnología y siempre estoy en busca de nuevas oportunidades
                        para aprender y crecer profesionalmente.
                    </p>
                    {/* Botones */}
                    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                        <motion.a
                            className="cursor-pointer bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            🔗 LINKEDIN
                        </motion.a>

                        <motion.a
                            className="cursor-pointer bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            💻 GITHUB
                        </motion.a>

                        <motion.a
                            className="cursor-pointer bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            ✉️ CORREO
                        </motion.a>
                    </div>
                </div>
                <motion.div
                    initial={{ scale: 1, y: 0 }}
                    animate={{ scale: 1, y: 20 }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        type: "spring",
                    }}
                    className="md:w-1/2 flex justify-center mt-8 md:mt-0"
                >
                    <img src="./astronaut.png" alt="Astronauta" className="w-80 md:w-[400px] animate-float" />
                </motion.div>

            </div>
        </div>
    );
};

export default HeroSection;
