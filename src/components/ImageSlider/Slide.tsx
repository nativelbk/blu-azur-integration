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
      className="absolute top-0 left-1/2 w-full h-full transform overflow-hidden -translate-x-1/2 transition-all duration-500 ease-in-out"
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
          "w-48 h-32 xs:w-56 xs:h-36 sm:w-64 sm:h-40 md:w-72 md:h-44 lg:w-80 lg:h-48 xl:w-96 xl:h-56 object-cover rounded-lg"
        }
      />
    </div>
  );
};
