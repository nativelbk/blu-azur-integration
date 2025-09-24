import React from "react";
import { type CarouselProps } from "../../types/types";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useAutoPlay } from "../../hooks/useAutoPlay";
import { useSlideNavigation } from "../../hooks/useSlideNavigation";
import { calculateSlidePosition } from "../../utils/slidePositionCalculator";
import { Slide } from "./Slide";
import { NavigationButtons } from "./NavigationButtons";

export const Carousel: React.FC<CarouselProps> = ({
  images,
  heightClass = "h-80",
  customImageClass,
  autoPlay = true,
  autoPlayInterval = 4000,
}) => {
  const windowWidth = useWindowWidth();
  const { currentIndex, goToPrevious, goToNext } = useSlideNavigation(
    images.length
  );

  useAutoPlay(
    autoPlay,
    autoPlayInterval,
    currentIndex,
    images.length,
    goToNext
  );

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className={`relative flex items-center justify-center ${heightClass}`}
      >
        {images.map((image, index) => {
          const positionData = calculateSlidePosition(
            index,
            currentIndex,
            images.length,
            windowWidth
          );

          return (
            <Slide
              key={index}
              image={image}
              positionData={positionData}
              customImageClass={customImageClass}
            />
          );
        })}
      </div>

      <NavigationButtons onPrevious={goToPrevious} onNext={goToNext} />
    </div>
  );
};

export default Carousel;
