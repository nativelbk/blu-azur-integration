import React from "react";
import type { SlidePosition } from "../../types/types";

interface SlideProps {
  image: {
    src: string;
    alt: string;
  };
  positionData: SlidePosition;
  customImageClass?: string;
}

export const Slide: React.FC<SlideProps> = ({
  image,
  positionData,
  customImageClass,
}) => {
  const { position, scale, opacity, zIndex, spacing } = positionData;

  return (
    <div
      className="absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out"
      style={{
        transform: `translateX(${position * spacing}%) scale(${scale})`,
        zIndex,
        opacity,
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className={
          customImageClass ||
          "w-64 h-40 xs:w-72 xs:h-44 sm:w-80 sm:h-48 md:w-96 md:h-56 lg:w-[28rem] lg:h-64 xl:w-[32rem] xl:h-72 object-cover rounded-lg shadow-lg"
        }
      />
    </div>
  );
};
