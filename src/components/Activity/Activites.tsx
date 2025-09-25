import React from "react";

const Activites: React.FC = () => {
  const items = [
    {
      icon: <img src="/assets/swimming.png" className="w-16 h-16" />,
      title: "Sports nautiques, plongée, voile",
    },
    {
      icon: <img src="/assets/groupe.png" className="w-16 h-16" />,
      title: "Randonnées et vélo dans l’Estérel",
    },
    {
      icon: <img src="/assets/casino.png" className="w-16 h-16" />,
      title: "Casino et vie nocturne animée",
    },
    {
      icon: <img src="/assets/village.png" className="w-16 h-16" />,
      title: "Villages perchés et marchés provençaux",
    },
    {
      icon: <img src="/assets/golf.png" className="w-16 h-16" />,
      title: "Un paradis pour les golfeurs",
    },
    {
      icon: <img src="/assets/mountains.png" className="w-16 h-16" />,
      title: "Montagne et vélo de route",
    },
  ];

  return (
    <section
      id="activity"
      className="relative bg-blue-500 text-white bg-cover bg-center px-6 py-16"
      style={{ backgroundImage: "url('/assets/piscine_2.png')" }}
    >
      <div className="absolute inset-0 bg-blue-600/70" />
      <div className="relative  container text-center">
        <h2 className="text-3xl md:text-6xl font-light mb-4">
          Saint Raphaël, l’endroit parfait pour <br />
          <pre className="font-semibold">vivre la Côte d’Azur</pre>
        </h2>
        <p className="max-w-3xl mx-auto text-sm md:text-lg text-blue-100 leading-relaxed mb-12">
          Avec ses plages dorées, ses 300 jours de soleil et ses calanques
          sauvages, Saint-Raphaël est une destination de rêve. Entre mer
          turquoise et rochers rouges de l’Estérel, elle offre un cadre
          idyllique pour la détente et l’aventure.
        </p>

        <div className="flex flex-wrap justify-between gap-8 md:gap-12 max-md:justify-center ">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-4 w-36"
            >
              <div className="w-34 h-34 flex items-center justify-center rounded-full bg-white text-blue-600 shadow-md">
                {item.icon}
              </div>
              <p className="text-sm md:text-lg font-bold">{item.title}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs md:text-lg text-blue-100 max-w-4xl mx-auto">
          Flânez sur la Promenade des Bains, explorez les criques secrètes ou
          partez en excursion depuis son port de plaisance. Saint-Raphaël, c’est
          la Côte d’Azur dans toute sa splendeur !
        </p>
      </div>
    </section>
  );
};

export default Activites;
