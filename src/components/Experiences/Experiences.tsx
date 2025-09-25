import { CircleChevronRight } from "lucide-react";
import React from "react";
import { Section } from "../Section/Section";
import { AnimatedText } from "../AnimatedText/AnimatedText";
import { CARDES_ITEMS } from "../../constants/cards";

const Experiences: React.FC = () => {
  return (
    <Section backgroundImage="/assets/experience.png">
      {(isVisible) => (
        <div className="max-w-7xl container mx-auto grid gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CARDES_ITEMS.slice(0, 2).map((card, index) => (
              <AnimatedText
                key={card.id}
                isVisible={isVisible}
                delay={index * 200}
                animationType="fadeUp"
                className="relative rounded-4xl overflow-hidden shadow-lg h-[30rem]"
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
                      <span className="text-white">À voir:</span> &nbsp;
                      <a
                        href={card.linkUrl}
                        className="text-blue underline text-sm"
                      >
                        {card.linkText}
                      </a>
                    </>
                  )}
                </div>
              </AnimatedText>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CARDES_ITEMS.slice(2).map((card, index) => (
              <AnimatedText
                key={card.id}
                isVisible={isVisible}
                delay={400 + index * 200}
                animationType="fadeUp"
                className="relative rounded-4xl overflow-hidden shadow-lg h-[30rem]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 rounded-5xl w-full h-full object-cover"
                />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm mb-3 opacity-90">{card.description}</p>

                  {card.linkText && (
                    <button className="mt-6 px-6 w-full border-2 text-sm p-2 border-blue flex justify-around items-center text-blue font-semibold rounded-full transition">
                      {card.linkText} <CircleChevronRight color="#4097ff" />
                    </button>
                  )}
                </div>
              </AnimatedText>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
};

export default Experiences;
