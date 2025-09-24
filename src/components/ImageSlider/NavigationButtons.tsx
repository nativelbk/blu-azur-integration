import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevious,
  onNext,
}) => {
  return (
    <>
      <button
        onClick={onNext}
        className="absolute top-1/2 right-1 sm:right-2 transform -translate-y-1/2 bg-black/50 text-white p-1.5 sm:p-2 rounded-full hover:bg-black/70 transition-colors z-30"
      >
        <ChevronRight size={16} className="sm:w-6 sm:h-6" />
      </button>
    </>
  );
};
