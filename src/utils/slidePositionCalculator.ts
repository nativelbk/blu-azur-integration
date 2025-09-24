import type { SlidePosition } from "../types/types";

export const calculateSlidePosition = (
  index: number,
  currentIndex: number,
  totalSlides: number,
  windowWidth: number
): SlidePosition => {
  let position = index - currentIndex;

  if (position > totalSlides / 2) position -= totalSlides;
  if (position <= -totalSlides / 2) position += totalSlides;

  const isActive = position === 0;
  const scale = isActive ? 1 : windowWidth < 768 ? 0.85 : 0.7;
  const opacity = isActive ? 1 : 0.4;
  const zIndex = isActive ? 20 : 10;
  const spacing = windowWidth < 768 ? 35 : 45;

  return { position, isActive, scale, opacity, zIndex, spacing };
};
