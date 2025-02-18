import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-[#0a192f] text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-8">
                {/* Texto */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl font-bold text-yellow-400">¡Hola! soy Geral</h1>
                    <h2 className="text-3xl mt-4 font-semibold">Desarrolladora de sistemas web y de escritorio</h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Soy desarrolladora móvil y web junior con formación en Ingeniería de Sistemas.
                        Me apasiona la tecnología y siempre estoy en busca de nuevas oportunidades
                        para aprender y crecer profesionalmente.
                    </p>
                    {/* Botones */}
                    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
                        <a href="#" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
                            🔗 LINKEDIN
                        </a>
                        <a href="#" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
                            💻 GITHUB
                        </a>
                        <a href="#" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition">
                            ✉️ CORREO
                        </a>
                    </div>
                </div>

                {/* Imagen */}
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
