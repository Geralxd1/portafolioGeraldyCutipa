import { motion } from "framer-motion";

const experiences = [
    {
        company: "Humano Computador SAC",
        role: "Desarrollador de Software",
        date: "2023 - Presente",
        responsibilities: [
            "Desarrollo de sistemas web con Angular, Node.js y SQL Server.",
            "Implementación de módulos en Windows Forms para gestión de datos.",
            "Participación en el desarrollo de una aplicación móvil con Android Studio y Kotlin.",
            "Mantenimiento y optimización de bases de datos en SQL Server."
        ],
        achievements: [
            "Automatización de procesos administrativos, reduciendo tiempos en un 40%.",
            "Mejora de la eficiencia en reportes con implementación de dashboards dinámicos.",
            "Colaboración en un equipo ágil con metodologías Scrum/Kanban."
        ]
    }
];

const projects = [
    {
        title: "Chatbot con PLN para consultas administrativas",
        type: "Tesis - 2024",
        technologies: "Python, React, NLP",
        description: "Desarrollo de un chatbot con procesamiento de lenguaje natural para mejorar la atención en una institución educativa.",
        link: "#",
        github: "#"
    },
    {
        title: "Sistema de Gestión Académica",
        type: "Proyecto Final - 2023",
        technologies: "Angular, Node.js, SQL Server",
        description: "Plataforma web para la gestión de notas y asistencia en colegios.",
        link: "#",
        github: "#"
    }
];

export default function Experience() {
    return (
        <section className="py-16 px-8 text-white">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center mb-10"
            >
                Experiencia Profesional
            </motion.h2>
            {experiences.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
                >
                    <h3 className="text-2xl font-semibold">{exp.role} - {exp.company}</h3>
                    <p className="text-gray-400">{exp.date}</p>
                    <ul className="mt-4 list-disc list-inside">
                        {exp.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                    </ul>
                    <h4 className="text-lg font-semibold mt-4">Logros:</h4>
                    <ul className="list-disc list-inside">
                        {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                    </ul>
                </motion.div>
            ))}

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center mb-10 mt-16"
            >
                Proyectos
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((proj, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-2xl font-semibold">{proj.title}</h3>
                        <p className="text-gray-400">{proj.type}</p>
                        <p className="mt-2">{proj.description}</p>
                        <p className="text-sm text-gray-400 mt-2">Tecnologías: {proj.technologies}</p>
                        <div className="mt-4 flex gap-4">
                            <a href={proj.link} className="text-blue-400 hover:underline">🔗 Ver Proyecto</a>
                            <a href={proj.github} className="text-blue-400 hover:underline">💻 Código en GitHub</a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
