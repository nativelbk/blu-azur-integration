import React from "react";
import type { ImageItem } from "../../types/slider-types";
import Carousel from "../ImageSlider/Carousel";

const images: ImageItem[] = [
  {
    id: 2,
    alt: "Residence",
    src: "/assets/residence.png",
  },
  {
    id: 1,
    alt: "Piscine",
    src: "/assets/piscine.png",
  },
];

const PrivateAppartment: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 container bg-white">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-5xl font-normal text-black-title leading-snug">
          Le confort et la sérénité d’un <br />
          <span className="font-bold">appartement privé</span>
        </h2>
        <p className="mt-4 text-black-text leading-relaxed">
          Blu Azur vous propose des appartements élégants et spacieux, conçus
          pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et
          moderne, ils sont parfaits pour une escapade détente ou un séjour
          prolongé.
        </p>

        <h3 className="mt-6 text-2xl  text-black-text">Les inclusions :</h3>
        <ul className="mt-4 space-y-2 text-black-text">
          {[
            "Stationnement privé",
            "Piscine extérieure avec chaises longues",
            "Linge de lit et serviettes",
            "Télévision, téléphone et Wi-Fi (accès au salon)",
            "Réfrigérateur, cuisinière, lave-vaisselle, vaisselle",
            "Kit bébé : comprend un lit parapluie avec un vrai matelas et une chaise haute",
            "Autres commodités en prêt à la réception : jeux de société, livres, raquettes et balles de ping-pong, sèche-cheveux, fer et planche à repasser, adaptateur pour les prises étrangères et cache-prises pour les enfants.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <Carousel images={images} heightClass="h-72 md:h-80" />
      </div>
    </section>
  );
};

export default PrivateAppartment;
