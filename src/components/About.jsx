import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaPhp,
  FaGitAlt,
  FaLinux,
  FaDocker,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiFigma,
  SiPostgresql,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Docker", icon: <FaDocker className="text-green-500" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
  { name: "PHP", icon: <FaPhp className="text-purple-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "Linux / Terminal", icon: <FaLinux className="text-gray-600" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Postman", icon: <SiPostman className="text-purple-500" /> },
];

const About = () => {
  return (
    <section id="about" className="px-6 py-20 bg-white md:px-20">
      <div className="flex flex-col-reverse items-start max-w-6xl gap-12 mx-auto md:flex-row">
        <div className="w-full md:w-1/2">
          <h3 className="mb-6 text-3xl font-bold text-gray-700">
            Tecnologias & Ferramentas
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-800 transition duration-200 transform bg-gray-100 rounded-full shadow hover:scale-105"
              >
                <span className="text-lg">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h3 className="mb-6 text-3xl font-bold text-gray-700">Sobre Mim</h3>
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Sou um desenvolvedor fullstack j&uacute;nior, apaixonado por
            tecnologia e cria&ccedil;&atilde;o de solu&ccedil;&otilde;es
            digitais. Tenho forma&ccedil;&atilde;o em An&aacute;lise e
            Desenvolvimento de Sistemas e foco no desenvolvimento de
            aplica&ccedil;&otilde;es web modernas, funcionais e
            responsivas.Tenho conhecimento s&oacute;lido em{" "}
            <strong>
              React, Java, Spring Boot, Laravel, APIs REST, Git e Docker
            </strong>
            . Atualmente, estou focado em construir projetos modernos com React
            no front e APIs robustas no back-end.
          </p>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Ao longo da minha jornada, desenvolvi aplica&ccedil;&otilde;es
            pessoais que integram frontend e backend, com foco em performance,
            boas pr&aacute;ticas e experi&ecirc;ncia do usu&aacute;rio. Estou
            sempre em busca de aprimoramento t&eacute;cnico e de oportunidades
            para aplicar meus conhecimentos em projetos reais.
          </p>

          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Estou em busca da minha primeira oportunidade profissional, onde
            possa aplicar minhas habilidades, crescer com desafios reais e
            contribuir para projetos inovadores. Sou autodidata, curioso, atento
            aos detalhes e gosto de escrever c&oacute;digo limpo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
