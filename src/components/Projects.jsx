import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiLaravel,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import image1 from "../assets/images/image.png";

const projects = [
  {
    id: 1,
    title: "Sistema de Reservas",
    image: image1,
    description:
      "Aplicação web para gerenciamento de reservas com login de usuário, painel administrativo e integração com API externa.",
    technologies: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-cyan-500" />,
      },
      { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    ],
    status: "Concluído",
    type: "Fullstack",
    repo: "https://github.com/usuario/projeto-reservas",
    finishedAt: "10 de Março de 2025",
  },
  {
    id: 2,
    title: "Landing Page para Startup",
    image: image1,
    description:
      "Página institucional desenvolvida para uma startup com foco em responsividade e performance.",
    technologies: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-500" />,
      },
    ],
    status: "Em andamento",
    type: "Front-end",
    repo: "https://github.com/usuario/landing-startup",
    finishedAt: "Previsto para 20 de Maio de 2025",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 py-20 bg-gray-100 md:px-20 font-roboto"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-gray-700">
          Meus Projetos
        </h2>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center overflow-hidden bg-white rounded-lg shadow-md md:flex-row md:items-start"
            >
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64 md:h-full"
                />
              </div>

              <div className="w-full p-6 space-y-4 md:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded-full"
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <span
                    className={`text-sm px-3 py-1 rounded-full font-semibold 
                    ${
                      project.status === "Concluído"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
                    {project.type}
                  </span>
                </div>

                <div className="flex flex-col items-start gap-3 mt-4 md:flex-row md:items-center md:justify-between">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-white transition bg-gray-800 rounded hover:bg-gray-700"
                  >
                    Ver Repositório
                  </a>
                  <span className="text-sm text-gray-600">
                    Finalizado em: {project.finishedAt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
