import type React from "react";
import { CircleChevronRight } from "lucide-react";

const HeroText: React.FC = () => {
  return (
    <div className=" flex flex-col gap-18 text-white">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl   mb-4">
          <span className="font-bold text-6xl">Votre évasion</span> <br />
          <span className="text-7xl">sur la Côte d’Azur !</span>
        </h2>
        <p className="mb-6 text-lg font-[400] text-shadow-lg  max-w-lg text-justify leading-relaxed">
          Blu Azur vous invite à découvrir le charme de Saint-Raphaël, une
          destination d’exception nichée entre Cannes et Saint-Tropez. Nos
          appartements tout équipés, situés dans un domaine privé sécurisé,
          offrent un cadre verdoyant et paisible, à quelques pas de la marina de
          Santa Lucia, des plages de sable fin et du centre-ville animé.
          Profitez d’un séjour alliant confort, sérénité et élégance au cœur de
          la Riviera française !
        </p>
      </div>
      <button className="border-2 border-white text-white flex justify-around items-center px-6 py-3 max-w-lg rounded-4xl font-bold text-lg ">
        Réservez dès maintenant votre séjour ! <CircleChevronRight />
      </button>
    </div>
  );
};

export default HeroText;
