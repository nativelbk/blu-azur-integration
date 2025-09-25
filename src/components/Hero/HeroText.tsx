import type React from "react";
import { CircleChevronRight } from "lucide-react";

const HeroText: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 lg:gap-18 text-white text-center lg:text-left">
      <div className="flex flex-col gap-4 lg:gap-4">
        <h2 className="text-4xl lg:text-6xl mb-4 lg:mb-4">
          <pre className="font-bold text-4xl lg:text-6xl block mb-2 lg:mb-0">
            Votre évasion
          </pre>
          <pre className="text-5xl lg:text-7xl block">sur la Côte d'Azur !</pre>
        </h2>
        <p className="mb-6 text-base lg:text-lg font-[400] max-w-full lg:max-w-lg text-justify  leading-relaxed mx-auto lg:mx-0">
          Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une
          destination d'exception nichée entre Cannes et Saint-Tropez. Nos
          appartements tout équipés, situés dans un domaine privé sécurisé,
          offrent un cadre verdoyant et paisible, à quelques pas de la marina de
          Santa Lucia, des plages de sable fin et du centre-ville animé.
          Profitez d'un séjour alliant confort, sérénité et élégance au cœur de
          la Riviera française !
        </p>
      </div>
      <button className="border-2 border-white text-white flex justify-center lg:justify-around items-center px-6 py-3 w-full lg:max-w-lg rounded-4xl font-bold text-base lg:text-lg mx-auto lg:mx-0">
        Réservez dès maintenant votre séjour !{" "}
        <CircleChevronRight className="ml-2" />
      </button>
    </div>
  );
};

export default HeroText;
