import { TypeAnimation } from "react-type-animation";

const TypingTextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Desenvolvedor Full Stack",
        3000,
        "Front-end com React",
        3000,
        "Back-end com Java e Spring Boot",
        3000,
        "Back-end com PHP e Laravel",
        3000,
        "",
        1000,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
      className="mb-16 text-xl italic text-orange-600 md:text-2xl"
    />
  );
};

export default TypingTextAnimation;
