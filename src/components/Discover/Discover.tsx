import React from "react";

const Discover: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-blue-500 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/discover_bg.png')" }}
    >
      <div className="container flex justify-between max-lg:flex-col-reverse gap-12 items-center">
        <div className="flex justify-center w-1/2">
          <div className="rounded-lg overflow-hidden shadow-lg w-3/4 max-w-sm">
            <img
              src="/assets/discover.png"
              alt="Découverte de la Côte d'Azur"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="text-white lg:w-1/2 ">
          <h2 className="text-3xl max-lg:text-center lg:text-5xl leading-snug  font-light lg:text-right  mb-4">
            Un point de départ idéal pour &nbsp;
            <pre className=" font-semibold ">découvrir la Côte d’Azur !</pre>
          </h2>
          <p className="max-lg:text-lg lg:text-lg text-justify leading-relaxed font-semibold opacity-90">
            Entre mer et montagne, Saint-Raphaël est une destination idéale pour
            les amateurs de plein air et de découvertes. Randonnées dans le
            Massif de l’Estérel, sports nautiques sur les eaux cristallines de
            la Méditerranée, balades en bateau vers les îles de Lérins ou encore
            golf et cyclisme sur des parcours panoramiques, chaque journée offre
            son lot d’aventures. Entre marchés provençaux, villages perchés et
            animations locales, l’art de vivre azuréen se dévoile à chaque
            instant, faisant de Saint-Raphaël un lieu vibrant et inoubliable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Discover;
