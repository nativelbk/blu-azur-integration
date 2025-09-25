import React from "react";
import { AnimatedText } from "../AnimatedText/AnimatedText";
import { InclusionList } from "../InclusionList/InclusionList";
import { INCLUSION_ITEMS } from "../../constants/inclusions";

interface ApartmentContentProps {
  isVisible: boolean;
}

export const ApartmentContent: React.FC<ApartmentContentProps> = ({
  isVisible,
}) => {
  return (
    <div className="w-full 2xl:w-2/5">
      <AnimatedText isVisible={isVisible} delay={0}>
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-normal text-black-title leading-snug sm:leading-tight md:leading-snug lg:leading-tight">
          Le confort et la sérénité d'un <br />
          <pre className="font-bold">appartement privé</pre>
        </h2>
      </AnimatedText>

      <AnimatedText isVisible={isVisible} delay={200}>
        <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-black-text">
          Blu Azur vous propose des appartements élégants et spacieux, conçus
          pour accueillir de 2 à 6 personnes. Offrant un cadre confortable et
          moderne, ils sont parfaits pour une escapade détente ou un séjour
          prolongé.
        </p>
      </AnimatedText>

      <AnimatedText isVisible={isVisible} delay={300}>
        <h3 className="mt-5 sm:mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-black-text">
          Les inclusions :
        </h3>
      </AnimatedText>

      <InclusionList items={INCLUSION_ITEMS} isVisible={isVisible} />
    </div>
  );
};
