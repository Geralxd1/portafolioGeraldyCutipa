import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
    const [active, setActive] = useState("Inicio");

    // Detectar la sección activa al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            sections.forEach((section) => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (window.scrollY >= top - height / 3) {
                    setActive(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = ["Inicio", "Sobre mí", "Habilidades", "Experiencia", "Contacto"];

    return (
        <nav className="fixed top-0 left-0 w-full text-white shadow-md z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">Geral Cutipa</h1>
                <ul className="flex gap-6">
                    {navItems.map((item) => (
                        <li key={item} className="relative">
                            <ScrollLink
                                to={item}  // Debe coincidir con el ID de las secciones
                                spy={true}
                                smooth={true}
                                offset={-70} // Ajusta para que no quede cubierto por el Navbar
                                duration={500}
                                className={`relative px-4 py-2 cursor-pointer ${active === item ? "text-yellow-400" : "text-white"}`}
                            >
                                {item}
                                {active === item && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 bottom-0 h-1 w-full bg-yellow-400"
                                    />
                                )}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
