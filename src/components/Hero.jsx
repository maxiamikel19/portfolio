import React, { useState, useEffect } from "react";
import foto from "../assets/images/foto.png";
import TypingTextAnimation from "./TypingTextAnimation";

const bgColors = [
  "bg-gray-100",
  "bg-blue-200",
  "bg-green-100",
  "bg-yellow-100",
  "bg-pink-200",
  "bg-purple-100",
];

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
        <a
          href="/cv/CV_Dev_Fullstack_Pt.pdf"
          download="Curriculo-Amikel.pdf"
          className="inline-block px-6 py-2 text-lg text-white transition bg-gray-600 hover:bg-gray-500"
        >
          Baixar CV
        </a>
      </div>

      <div className="flex justify-center md:w-1/2">
        <img
          src={foto}
          alt="Foto do perfil"
          className="object-cover border-4 border-white rounded-full shadow-lg w-60 h-60"
        />
      </div>
    </section>
  );
};

export default Hero;
