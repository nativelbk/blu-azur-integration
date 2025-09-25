import React from "react";
import { AnimatedText } from "../AnimatedText/AnimatedText";

export interface ActivityItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description?: string;
}

interface ActivityCardProps {
  item: ActivityItem;
  isVisible: boolean;
  delay?: number;
  className?: string;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  item,
  isVisible,
  delay = 0,
  className = "",
}) => {
  return (
    <AnimatedText
      isVisible={isVisible}
      delay={delay}
      animationType="scale"
      className={`flex flex-col items-center text-center space-y-4 w-36 ${className}`}
    >
      <div className="w-34 h-34 flex items-center justify-center rounded-full bg-white text-blue-600 shadow-md">
        {item.icon}
      </div>
      <p className="text-sm text-white md:text-lg font-bold">{item.title}</p>
      {item.description && (
        <p className="text-xs text-white">{item.description}</p>
      )}
    </AnimatedText>
  );
};
