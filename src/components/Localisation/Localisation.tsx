import React from "react";
import { CircleChevronRight } from "lucide-react";
import { Section } from "../Section/Section";
import { AnimatedText } from "../AnimatedText/AnimatedText";

const Localisation: React.FC<{ isVisible: boolean }> = ({}) => {
  return (
    <Section
      id="localisation"
      className="bg-center bg-cover"
      backgroundImage="/assets/map_bg.png"
    >
      {(isVisible) => (
        <div className="container flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="flex flex-col xl:w-1/2 max-xl:items-center max-lg:w-full max-xl:w-[75%]">
            <AnimatedText isVisible={isVisible} delay={0}>
              <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl max-xl:text-center font-light text-black-title leading-snug">
                Où se trouve Blu Azur à <br />
                <pre className="font-bold">Saint-Raphaël ?</pre>
              </h2>
            </AnimatedText>

            <AnimatedText isVisible={isVisible} delay={200}>
              <p className="mt-4 text-black-text text-lg text-justify font-semibold leading-relaxed">
                Blu Azur est idéalement située entre Saint-Tropez et Cannes, au
                cœur de l'une des plus belles stations balnéaires de France. Nos
                appartements se trouvent dans un domaine privé sécurisé, entouré
                de verdure, à quelques minutes à pied de la plage sablonneuse de
                Santa Lucia et de la marina. Proche du centre-ville de
                Saint-Raphaël, la résidence permet un accès facile aux
                boutiques, restaurants et animations locales. Une station
                d'autobus est située à la sortie du site, facilitant les
                déplacements, et une boulangerie à proximité vous offre du pain
                frais chaque matin pour bien commencer la journée.
              </p>
            </AnimatedText>

            <AnimatedText
              className=" w-1/2 max-sm:w-3/4"
              isVisible={isVisible}
              delay={400}
            >
              <button className="mt-6 px-6 py-4 border-2 text-lg border-blue flex  gap-2 justify-around items-center text-blue font-semibold rounded-full transition">
                Comment s'y rendre ? <CircleChevronRight color="#4097ff" />
              </button>
            </AnimatedText>
          </div>

          <AnimatedText
            isVisible={isVisible}
            delay={600}
            animationType="scale"
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="/assets/map.png"
              alt="Carte Blu Azur Saint-Raphaël"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </AnimatedText>
        </div>
      )}
    </Section>
  );
};

export default Localisation;
