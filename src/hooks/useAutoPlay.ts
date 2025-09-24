import { useEffect } from "react";

export const useAutoPlay = (
  autoPlay: boolean,
  interval: number,
  currentIndex: number,
  totalSlides: number,
  onNext: () => void
) => {
  useEffect(() => {
    if (!autoPlay || totalSlides <= 1) return;

    const timer = setInterval(onNext, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex, totalSlides, onNext]);
};
