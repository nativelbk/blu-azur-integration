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
    <section
      id="about"
      className="flex flex-col 2xl:flex-row items-center justify-between gap-8 lg:gap-12 container px-4 py-8 md:py-16 lg:py-20"
    >
      <div className="w-full 2xl:w-2/5">
        <h2
          className="
      text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl
      font-normal text-black-title
      leading-snug sm:leading-tight md:leading-snug lg:leading-tight
    "
        >
          Le confort et la sérénité d'un <br />
          <pre className="font-bold">appartement privé</pre>
        </h2>

        <p
          className="
      mt-3 sm:mt-4 md:mt-6
      text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl
      text-black-text
    "
        >
          Blu Azur vous propose des appartements élégants et spacieux, conçus
          pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et
          moderne, ils sont parfaits pour une escapade détente ou un séjour
          prolongé.
        </p>

        <h3
          className="
      mt-5 sm:mt-6 md:mt-8
      text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
      font-semibold text-black-text
    "
        >
          Les inclusions :
        </h3>

        <ul
          className="
      mt-3 sm:mt-4 md:mt-6
      space-y-2 sm:space-y-3 md:space-y-4
      text-black-text
      text-sm sm:text-base md:text-lg lg:text-lg
    "
        >
          {[
            "Stationnement privé",
            "Piscine extérieure avec chaises longues",
            "Linge de lit et serviettes",
            "Télévision, téléphone et Wi-Fi (accès au salon)",
            "Réfrigérateur, cuisinière, lave-vaisselle, vaisselle",
            "Kit bébé : comprend un lit parapluie avec un vrai matelas et une chaise haute",
            "Autres commodités en prêt à la réception : jeux de société, livres, raquettes et balles de ping-pong, sèche-cheveux, fer et planche à repasser, adaptateur pour les prises étrangères et cache-prises pour les enfants.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mt-1.5 md:mt-2 rounded-full bg-blue-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full 2xl:w-[30%] flex justify-center items-center mt-6 2xl:mt-0">
        <Carousel
          images={images}
          customImageClass="w-full h-full max-w-4xl object-cover rounded-2xl shadow-lg"
          heightClass="h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem]"
        />
      </div>
    </section>
  );
};

export default PrivateAppartment;
