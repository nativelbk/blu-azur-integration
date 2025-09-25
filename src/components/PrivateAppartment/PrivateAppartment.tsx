import React from "react";
import type { ImageItem } from "../../types/slider-types";
import Carousel from "../ImageSlider/Carousel";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { ApartmentContent } from "./ApartmentContent";
import { AnimatedText } from "../AnimatedText/AnimatedText";

const IMAGES: ImageItem[] = [
  {
    id: 2,
    alt: "Residence",
    src: "/assets/salon.png",
  },
  {
    id: 1,
    alt: "Piscine",
    src: "/assets/cuisine.png",
  },
];

const PrivateAppartment: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={ref}
      id="about"
      className="flex flex-col 2xl:flex-row items-center justify-between gap-8 lg:gap-12 container px-4 py-8 md:py-16 lg:py-20"
    >
      <ApartmentContent isVisible={isVisible} />

      <AnimatedText
        isVisible={isVisible}
        delay={500}
        animationType="scale"
        className="w-full 2xl:w-[30%] flex justify-center items-center mt-6 2xl:mt-0"
      >
        <Carousel
          images={IMAGES}
          customImageClass="w-full h-full max-w-4xl object-cover rounded-2xl shadow-lg"
          heightClass="h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem]"
        />
      </AnimatedText>
    </section>
  );
};

export default PrivateAppartment;
