import React from "react";
import { CircleChevronRight } from "lucide-react";

const Localisation: React.FC = () => {
  return (
    <section
      id="localisation"
      className=" bg-center bg-cover "
      style={{ backgroundImage: "url('/assets/map_bg.png')" }}
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8   bg-cover bg-center">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-6xl font-light text-black-title leading-snug">
            Où se trouve Blu Azur à <br />
            <span className="font-bold">Saint-Raphaël ?</span>
          </h2>
          <p className="mt-4 text-black-text text-lg text-justify font-semibold leading-relaxed">
            Blu Azur est idéalement située entre Saint-Tropez et Cannes, au cœur
            de l’une des plus belles stations balnéaires de France. Nos
            appartements se trouvent dans un domaine privé sécurisé, entouré de
            verdure, à quelques minutes à pied de la plage sablonneuse de Santa
            Lucia et de la marina. Proche du centre-ville de Saint-Raphaël, la
            résidence permet un accès facile aux boutiques, restaurants et
            animations locales. Une station d’autobus est située à la sortie du
            site, facilitant les déplacements, et une boulangerie à proximité
            vous offre du pain frais chaque matin pour bien commencer la
            journée.
          </p>

          <button className="mt-6 px-6 py-4 border-2 text-lg border-blue w-1/2 flex max-sm:w-3/4 justify-around items-center text-blue font-semibold rounded-full hover:bg-blue-500 hover:text-white transition">
            Comment s’y rendre ? <CircleChevronRight color="#4097ff" />
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="/assets/map.png"
            alt="Carte Blu Azur Saint-Raphaël"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Localisation;
