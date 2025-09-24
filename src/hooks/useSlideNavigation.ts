import { useState } from "react";

export const useSlideNavigation = (totalSlides: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
  };

  return {
    currentIndex,
    goToPrevious,
    goToNext,
    setCurrentIndex,
  };
};
