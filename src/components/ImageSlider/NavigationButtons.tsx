import React from "react";
import { CircleChevronRight } from "lucide-react";

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onNext,
}) => {
  return (
    <>
      <button
        onClick={onNext}
        className="absolute top-1/2 right-1 sm:right-2 shadow-2xl transform -translate-y-1/2  text-white p-1.5 sm:p-2 rounded-full transition-colors z-30"
      >
        <CircleChevronRight size={24} className="sm:w-6 sm:h-6" />
      </button>
    </>
  );
};
