import React from "react";
import { AnimatedText } from "../AnimatedText/AnimatedText";

interface InclusionItem {
  id: string;
  text: string;
}

interface InclusionListProps {
  items: InclusionItem[];
  isVisible: boolean;
}

export const InclusionList: React.FC<InclusionListProps> = ({
  items,
  isVisible,
}) => {
  return (
    <ul className="mt-3 sm:mt-4 md:mt-6 space-y-2 sm:space-y-3 md:space-y-4 text-black-text text-sm sm:text-base md:text-lg lg:text-lg">
      {items.map((item, index) => (
        <li key={item.id}>
          <AnimatedText
            isVisible={isVisible}
            delay={500 + index * 100}
            animationType="fadeLeft"
          >
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mt-1.5 md:mt-2 rounded-full bg-blue-500 flex-shrink-0" />
              <span>{item.text}</span>
            </div>
          </AnimatedText>
        </li>
      ))}
    </ul>
  );
};
