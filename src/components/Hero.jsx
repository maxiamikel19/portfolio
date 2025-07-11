import React, { useState, useEffect } from "react";
import foto from "../assets/images/foto.png";
import TypingTextAnimation from "./TypingTextAnimation";
import { ArrowDownTrayIcon, EyeIcon } from "@heroicons/react/24/solid";

const bgColors = [
  "bg-gray-100",
  "bg-blue-200",
  "bg-green-100",
  "bg-yellow-100",
  "bg-pink-200",
  "bg-purple-100",
];

const baseButtonClasses =
  "inline-flex items-center gap-2 px-6 py-2 text-lg text-white font-semibold rounded transition shadow-md hover:shadow-lg";
const viewButtonGradient =
  "bg-gradient-to-r from-indigo-800 to-blue-900 hover:from-indigo-700 hover:to-blue-800";
const downloadButtonGradient =
  "bg-gradient-to-r from-indigo-600 via-blue-700 to-cyan-700 hover:from-indigo-500 hover:via-blue-600 hover:to-cyan-600";

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgColors.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`flex flex-col-reverse items-center justify-between min-h-screen px-6 py-20 transition-colors duration-1000 ease-in-out ${bgColors[currentBg]} md:flex-row md:px-20`}
    >
      <div className="mb-10 text-center md:w-1/2 md:mb-0 md:text-left">
        <h1 className="mb-2 text-4xl font-bold text-gray-700 md:text-5xl">
          Olá, sou Amikel Maxi
        </h1>

        <TypingTextAnimation />

        <p className="my-6 text-lg text-gray-700">
          Tenho experiência com tecnologias modernas como React, TailwindCSS,
          Spring Boot e Laravel. Crio soluções eficientes com foco em desempenho
          e usabilidade.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://maxiamikel19.github.io/cv-web/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseButtonClasses} ${viewButtonGradient}`}
          >
            <EyeIcon className="w-5 h-5" />
            Ver CV
          </a>

          <a
            href="/cv/Cv_Amikel_Maxi_web_Dev_Fullstack_Pt.pdf"
            download="Cv_Amikel_Maxi_web_Dev_Fullstack_Pt.pdf"
            className={`${baseButtonClasses} ${downloadButtonGradient}`}
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>

      <div className="flex justify-center md:w-1/2">
        <img
          src={foto}
          alt="Foto do perfil"
          loading="lazy"
          className="object-cover w-60 h-60 border-4 border-white rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
