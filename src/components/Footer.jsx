const Footer = () => {
  return (
    <footer className="px-6 py-10 text-white bg-gray-600 md:px-20">
      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
        <div>
          <h2 className="text-xl font-semibold">Amikel Maxi</h2>
          <p className="mt-2 text-sm text-gray-300">
            Desenvolvedor Fullstack apaixonado por criar experi&ecirc;ncias
            digitais modernas e funcionais.
          </p>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">
            Navega&ccedil;&atilde;o
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                Sobre Mim
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projetos
              </a>
            </li>
            <li>
              <a href="#certificates" className="hover:underline">
                Cursos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-lg font-semibold">Redes Sociais</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="https://github.com/maxiamikel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/seuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/seunumero"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-sm text-center text-gray-400">
        &copy; {new Date().getFullYear()} Amikel Maxi. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
