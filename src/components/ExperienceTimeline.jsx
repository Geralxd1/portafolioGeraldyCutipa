import { FaLaptopCode, FaDatabase, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Desarrollador Web & Móvil",
        company: "Empresa XYZ",
        year: "2023 - Presente",
        description:
            "Desarrollo de aplicaciones web y móviles usando React, Angular y Kotlin.",
        icon: <FaLaptopCode className="text-yellow-400 text-3xl" />,
    },
    {
        title: "Desarrollador Backend",
        company: "Tech Solutions",
        year: "2022 - 2023",
        description:
            "Manejo de bases de datos SQL Server y desarrollo de APIs con Node.js.",
        icon: <FaDatabase className="text-yellow-400 text-3xl" />,
    },
    {
        title: "Desarrollador Windows Forms",
        company: "Software Corp",
        year: "2021 - 2022",
        description:
            "Desarrollo de sistemas de escritorio en C# con SQL Server.",
        icon: <FaMobileAlt className="text-yellow-400 text-3xl" />,
    },
];

export default function ExperienceTimeline() {
    return (
        <section id="Experiencia" className="py-16 bg-[#0a192f] text-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
                    🚀 Experiencia
                </h2>
                <div className="relative border-l-4 border-yellow-400 ml-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                            viewport={{ once: true }}
                            className="mb-10 ml-6"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-[#0a192f] p-3 rounded-full shadow-lg">
                                    {exp.icon}
                                </div>
                                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                            </div>
                            <p className="text-gray-300">{exp.company} - {exp.year}</p>
                            <p className="mt-2 text-gray-400">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
