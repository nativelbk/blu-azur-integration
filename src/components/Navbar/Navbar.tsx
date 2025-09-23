import React from "react";

const Navbar: React.FC = () => {
  return (
    <section className="px-8 lg:px-20 pt-6">
      <nav className=" top-0 left-0 py-4 w-full border-b-2 border-white flex items-center justify-between z-50">
        <div className="flex items-center">
          <img src="/assets/logo.png" className="w-48 md:w-32" alt="logo" />
        </div>

        <ul className="hidden md:flex items-center space-x-10 text-white font-medium tracking-wide">
          <li className="relative group cursor-pointer">
            <span className="text-xl">À propos</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="text-xl">Localisation</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="text-xl">Activités</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li>
            <button className="bg-blue rounded-3xl transition-all duration-300 text-white px-8 py-2 text-xl  shadow-md hover:shadow-lg">
              Réservé
            </button>
          </li>
        </ul>

        <div className="md:hidden text-white text-3xl cursor-pointer"></div>
      </nav>
    </section>
  );
};

export default Navbar;
