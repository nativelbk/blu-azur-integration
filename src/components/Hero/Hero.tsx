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
    <section className="container flex flex-col lg:flex-row items-center lg:items-end  max-lg:h-fit gap-6 lg:gap-8 xl:gap-12 justify-between px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:w-1/2 xl:w-2/5 flex justify-center lg:justify-start   ">
        <HeroText />
      </div>

      <div className="w-full lg:w-1/2 xl:w-3/5 flex justify-center lg:justify-end order-1 lg:order-2 mb-4 lg:mb-0">
        <Carousel
          images={images}
          heightClass="h-48 xs:h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96"
          customImageClass="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-48 xs:h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 object-cover rounded-3xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
