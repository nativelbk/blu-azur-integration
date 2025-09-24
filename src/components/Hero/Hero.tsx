import React from "react";
import HeroText from "./HeroText";
import type { ImageItem } from "../../types/types";
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

const Hero: React.FC = () => {
  return (
    <section className="container flex items-end gap-4 justify-between">
      <HeroText />

      <Carousel
        images={images}
        heightClass="h-32 sm:h-36 md:h-48 lg:h-56"
        customImageClass="w-72 h-32 xs:w-80 xs:h-36 sm:w-88 sm:h-40 md:w-96 md:h-44 lg:w-[28rem] lg:h-48 xl:w-[32rem] xl:h-52 object-cover rounded-3xl shadow-lg"
      />
    </section>
  );
};

export default Hero;
