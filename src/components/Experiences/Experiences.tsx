import { CircleChevronRight } from "lucide-react";
import React from "react";

const Experiences: React.FC = () => {
  const cards = [
    {
      image: "/assets/patrimoine.png",
      title: "Un patrimoine culturel d’exception",
      description:
        "De Picasso à Cocteau, la Côte d’Azur a toujours été une terre d’inspiration pour les artistes. Musées, galeries et sites historiques jalonnent la région, offrant un voyage au cœur de l’art et de l’histoire entre Saint-Raphaël, Antibes et Saint-Paul-de-Vence.",
      linkText: "Le Festival de Cannes, Carnaval de Nice, Fête du Citron",
      linkUrl: "#",
    },
    {
      image: "/assets/sport.png",
      title: "Le sport au rythme de la Méditerranée",
      description:
        "Du légendaire Grand Prix de Monaco aux défis de l’Ironman, en passant par le Marathon des Alpes-Maritimes, la région vibre au rythme des grands événements sportifs. Cyclisme sur la Route des Crêtes, golf sur des parcours prestigieux et voile lors des Régates de Saint-Tropez complètent ce décor idéal pour les amateurs de sport et d’adrénaline.",
      linkText:
        "Grand prix de Monaco, Ironman France - Nice, Marathon des Alpes-Maritimes, Régates de Saint-Tropez",
      linkUrl: "#",
    },
    {
      image: "/assets/destination.png",
      title: "Une destination gourmande et authentique",
      description:
        "Les marchés provençaux dévoilent des saveurs du terroir, entre fromages affinés, huile d’olive et spécialités méditerranéennes. Vignerons passionnés et restaurateurs raffinés offrent une expérience gastronomique où tradition et créativité se rencontrent dans un cadre enchanteur.",
      linkText: "Consulter la liste des meilleurs restaurants",
      linkUrl: "#",
    },
    {
      image: "/assets/famille.png",
      title: "Des expériences inoubliables en famille",
      description:
        "Entre villages pittoresques, marchés publics animés et escapades sur le littoral, Saint-Raphaël propose des activités idéales pour partager des moments inoubliables. La diversité des paysages et les fêtes de la région en font une destination parfaite pour des vacances placées sous le signe de la découverte et du divertissement en famille.",
      linkText: "",
      linkUrl: "#",
    },
    {
      image: "/assets/nature.png",
      title: "L’évasion en pleine nature",
      description:
        "Le Massif de l’Estérel déploie ses richesses rouges entre ciel et mer, offrant des panoramas spectaculaires. Randonnées, balades côtières et sentiers sauvages permettent de s’imprégner d’un environnement préservé, idéal pour une parenthèse hors du temps.",
      linkText: "Consulter la liste des sentiers pédestres",
      linkUrl: "#",
    },
  ];

  return (
    <section
      className="relative w-full py-16 px-6 lg:px-12 bg-white/70 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/experience.png')" }}
    >
      <div className="max-w-7xl mx-auto grid gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.slice(0, 2).map((card, index) => (
            <div
              key={index}
              className="relative rounded-5xl overflow-hidden shadow-lg h-80"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full rounded-5xl object-cover"
              />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm mb-3 opacity-90">{card.description}</p>
                {card.linkText && (
                  <>
                    <span className="text-white ">À voir:</span> &nbsp;
                    <a
                      href={card.linkUrl}
                      className="text-blue underline text-sm"
                    >
                      {card.linkText}
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.slice(2).map((card, index) => (
            <div
              key={index}
              className="relative rounded-5xl overflow-hidden shadow-lg h-[30rem]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 rounded-5xl w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm mb-3 opacity-90">{card.description}</p>

                {card.linkText && (
                  <button className="mt-6 px-6 w-full border-2 text-sm p-2 border-blue flex justify-around items-center text-blue font-semibold rounded-full hover:bg-blue-500 hover:text-white transition">
                    {card.linkText} <CircleChevronRight color="#4097ff" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
