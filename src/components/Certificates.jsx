import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const courses = [
  {
    id: 1,
    courseName: "Análise e Desenvolvimento de Sistemas",
    institution: "Unicesumar",
    completionDate: "Janeiro 2022",
    certificateLink:
      "https://drive.google.com/file/d/1Zlqi7OieNj9C95CRw0igGZaX9XF1DNPJ/view?usp=drive_link",
  },
  {
    id: 2,
    courseName: "Spring Boot + ReactJS: Fullstack do Zero ao Deploy no Docker",
    institution: "Udemy",
    completionDate: "Março 2024",
    certificateLink:
      "https://drive.google.com/file/d/1hok-vy0X_OoZVkjOms_iTFunuE3PDG20/view?usp=drive_link",
  },
  {
    id: 3,
    courseName: "Laravel 9 - Crea Aplicaciones y Sitios Web con PHP 8 y MVC",
    institution: "Udemy",
    completionDate: "Junho 2024",
    certificateLink:
      "https://drive.google.com/file/d/1Zlqi7OieNj9C95CRw0igGZaX9XF1DNPJ/view?usp=drive_link",
  },
  {
    id: 4,
    courseName: "Desenvolvimento Web Fullstack",
    institution: "Udemy",
    completionDate: "Janeiro 2025",
    certificateLink: "https://linkparacertificado.com/curso1",
  },
];

const Certificates = () => {
  return (
    <motion.section
      id="certificates"
      className="px-6 py-16 bg-white md:px-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="mb-12 text-3xl font-bold text-center text-gray-700">
        Formação e Cursos
      </h3>

      <ol className="relative max-w-4xl pl-6 mx-auto space-y-10 border-l-4 border-gray-400">
        {courses.map((course, index) => (
          <motion.li
            key={course.id}
            className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-[28px] top-1.5 w-6 h-6 bg-white border-2 border-gray-500 rounded-full" />

            <div className="ml-4">
              <h4 className="text-xl font-semibold text-gray-800">
                {course.courseName}
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                {course.institution} — Conclusão: {course.completionDate}
              </p>
              <a
                href={course.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm text-blue-600 transition hover:underline hover:text-blue-700"
              >
                <FaCertificate />
                Ver Certificado
              </a>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
};

export default Certificates;
