import React from "react";
import { Section } from "../Section/Section";
import { ActivityCard } from "../ActivityCard/ActivityCard";
import { AnimatedText } from "../AnimatedText/AnimatedText";
import { ACTIVITY_ITEMS } from "../../constants/activities";

export const Activities: React.FC = () => {
  return (
    <Section
      id="activity"
      backgroundImage="/assets/piscine_2.png"
      overlay
      overlayColor="bg-blue-600/70"
    >
      {(isVisible) => (
        <div className="container text-center">
          <AnimatedText isVisible={isVisible} delay={0}>
            <h2 className="text-3xl text-white lg:text-6xl font-light mb-4">
              Saint Raphaël, l'endroit parfait pour <br />
              <pre className="font-semibold">vivre la Côte d'Azur</pre>
            </h2>
          </AnimatedText>

          <AnimatedText isVisible={isVisible} delay={200}>
            <p className="max-w-3xl mx-auto text-sm md:text-lg text-blue-100 leading-relaxed mb-12">
              Avec ses plages dorées, ses 300 jours de soleil et ses calanques
              sauvages, Saint-Raphaël est une destination de rêve. Entre mer
              turquoise et rochers rouges de l'Estérel, elle offre un cadre
              idyllique pour la détente et l'aventure.
            </p>
          </AnimatedText>

          <div className="flex flex-wrap justify-between gap-8 md:gap-12 max-md:justify-center ">
            {ACTIVITY_ITEMS.map((item, index) => (
              <ActivityCard
                key={item.id}
                item={item}
                isVisible={isVisible}
                delay={300 + index * 100}
              />
            ))}
          </div>

          <AnimatedText isVisible={isVisible} delay={800}>
            <p className="text-xs md:text-lg text-blue-100 max-w-4xl mx-auto">
              Flânez sur la Promenade des Bains, explorez les criques secrètes
              ou partez en excursion depuis son port de plaisance.
              Saint-Raphaël, c'est la Côte d'Azur dans toute sa splendeur !
            </p>
          </AnimatedText>
        </div>
      )}
    </Section>
  );
};

export default Activities;
