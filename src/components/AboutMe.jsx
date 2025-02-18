export default function AboutMe() {
    return (
        <section id="sobre-mi" className="text-white py-16 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* Imagen */}
                <div className="flex-shrink-0">
                    <img
                        src="/ruta-a-tu-imagen.jpg"
                        alt="Geral programando"
                        className="w-48 md:w-60 rounded-full border-4 border-yellow-400 shadow-lg"
                    />
                </div>

                {/* Texto */}
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                        Sobre mí 🚀
                    </h2>
                    <p className="text-lg leading-relaxed">
                        ¡Hola! Soy <span className="font-bold text-yellow-300">Geral</span>, egresada de Ingeniería de Sistemas y apasionada por el desarrollo de software. Desde el inicio de mi carrera, he explorado múltiples tecnologías y metodologías, creando aplicaciones eficientes y dinámicas.
                    </p>
                    <p className="text-lg leading-relaxed mt-3">
                        Me especializo en el desarrollo de <span className="font-semibold text-yellow-300">sistemas web y de escritorio</span>. Tengo experiencia con <strong>Angular</strong>, <strong>SQL Server</strong>  y <strong>Windows Forms</strong>, además de habilidades en <strong>Kotlin</strong> para desarrollo móvil. Me encanta estructurar proyectos de forma limpia, optimizada y escalable.
                    </p>
                    <p className="text-lg leading-relaxed mt-3">
                        Siempre estoy en busca de nuevos desafíos y oportunidades para innovar. Mi objetivo es diseñar soluciones tecnológicas que mejoren la experiencia del usuario y aporten valor real a los proyectos.
                    </p>

                    {/* Botón para descargar CV */}
                    <div className="mt-6">
                        <a
                            href="/ruta-a-tu-cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-300 transition-all"
                        >
                            📄 Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
