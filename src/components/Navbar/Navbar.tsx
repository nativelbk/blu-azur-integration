import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="container sticky top-0 left-0 right-0 z-50  ">
      <nav className="w-full border-b-2 border-white flex items-center justify-between py-4 px-4 lg:px-0 lg:py-0">
        <div className="flex items-center">
          <img src="/assets/logo.png" className="w-32 lg:w-48" alt="logo" />
        </div>

        <ul className="hidden lg:flex items-center space-x-10 text-white font-medium">
          <li className="relative group py-8 cursor-pointer">
            <a href="#about" className="text-xl">
              À propos
            </a>
            <span className="absolute left-0 -bottom-[5px] w-0 h-[8px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative py-8 group cursor-pointer">
            <a href="#localisation" className="text-xl">
              Localisation
            </a>
            <span className="absolute left-0 -bottom-[5px] w-0 h-[8px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative py-8 group cursor-pointer">
            <a href="#activity" className="text-xl">
              Activités
            </a>
            <span className="absolute left-0 -bottom-[5px] w-0 h-[8px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li>
            <button className="bg-blue rounded-3xl transition-all duration-300 text-white px-8 py-2 text-xl shadow-md hover:shadow-lg">
              Réservé
            </button>
          </li>
          {/* <li>
            <img src="/assets/menu.png" className="w-10" alt="menu" />
          </li> */}
        </ul>

        <div className="lg:hidden flex items-center space-x-4">
          <button className="bg-blue rounded-3xl transition-all duration-300 text-white px-6 py-2 text-base shadow-md hover:shadow-lg">
            Réservé
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white cursor-pointer"
          >
            <img src="/assets/menu.png" className="w-8" alt="menu" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 border-b-2 border-white lg:hidden mt-[-1px]">
            <ul className="flex flex-col items-center py-6 space-y-6 text-white font-medium">
              <li
                className="cursor-pointer py-2 text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </li>
              <li
                className="cursor-pointer py-2 text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Localisation
              </li>
              <li
                className="cursor-pointer py-2 text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Activités
              </li>
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
