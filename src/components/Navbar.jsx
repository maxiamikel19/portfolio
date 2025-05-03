import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "home" },
    { id: "about", label: "about me" },
    { id: "projects", label: "projetos" },
    { id: "certificates", label: "cursos" },
    { id: "contact", label: "contato" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow">
      <div className="flex items-center justify-between max-w-6xl px-4 py-4 mx-auto">
        <h1 className="text-xl font-bold text-gray-800">Amikel|Maxi</h1>

        <button
          className="text-2xl text-gray-800 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              className="text-gray-700 capitalize cursor-pointer hover:text-orange-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div className="px-4 py-4 space-y-4 bg-white border-t border-gray-200 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="block text-gray-700 capitalize cursor-pointer hover:text-orange-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
