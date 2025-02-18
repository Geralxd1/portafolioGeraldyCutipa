import { FaReact, FaAngular, FaDatabase, FaWindows, FaAndroid, FaSass, FaNodeJs } from "react-icons/fa";
import { FaGitAlt, FaDocker, FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
const skills = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Angular", icon: <FaAngular className="text-red-500" /> },
    { name: "SQL Server", icon: <FaDatabase className="text-yellow-400" /> },
    { name: "Windows Forms", icon: <FaWindows className="text-gray-500" /> },
    { name: "C#", icon: <FaLaptopCode className="text-purple-400" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-red-400" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
    { name: "Kotlin", icon: <FaCode className="text-purple-400" /> },
    { name: "Sass", icon: <FaSass className="text-pink-400"/> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500"/> },
];

export default function Skills() {
    return (
        <section id="habilidades" className=" text-white py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
                    Habilidades Técnicas 💻
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-5 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform"
                        >
                            <div className="text-5xl mb-3">{skill.icon}</div>
                            <p className="text-lg font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
